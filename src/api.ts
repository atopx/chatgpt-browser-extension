export async function fetchExtensionConfigs(): Promise<{
  chatgpt_webapp_model_name: string
  openai_model_names: string[]
}> {
  return new Promise((resole, _) => {
    resole({
      chatgpt_webapp_model_name: 'text-davinci-002-render',
      openai_model_names: ['text-davinci-003'],
    })
  })
}
