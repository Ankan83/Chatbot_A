import openai
import gradio

openai.api_key = "sk-proj-hA4ITKZrp60GBsRvjF5cT3BlbkFJiMlpm8D7LnT5o4kiDKPn"

messages = [{"role": "system", "content": "You are a teacher that specializes in creating Aptitude questions for students"}]

def CustomChatGPT(user_input):
    messages.append({"role": "user", "content": user_input})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    return ChatGPT_reply

demo = gradio.Interface(fn=CustomChatGPT, inputs = "text", outputs = "text", title = "Aptitude Assistant")

demo.launch(share=True)