using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Model>))]
public sealed record Model : OpenStringEnum<Model>
{
    private Model(string value) : base(value)
    {
    }

    public static readonly Model Aimode = new("aimode");

    public static readonly Model Aioverview = new("aioverview");

    public static readonly Model Chatgpt = new("chatgpt");

    public static readonly Model Copilot = new("copilot");

    public static readonly Model Gemini = new("gemini");

    public static readonly Model Google = new("google");

    public static readonly Model Grok = new("grok");

    public static readonly Model Perplexity = new("perplexity");

    public TResult Match<TResult>(Func<TResult> onAimode,
        Func<TResult> onAioverview,
        Func<TResult> onChatgpt,
        Func<TResult> onCopilot,
        Func<TResult> onGemini,
        Func<TResult> onGoogle,
        Func<TResult> onGrok,
        Func<TResult> onPerplexity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aimode => onAimode(),
            _ when this == Aioverview => onAioverview(),
            _ when this == Chatgpt => onChatgpt(),
            _ when this == Copilot => onCopilot(),
            _ when this == Gemini => onGemini(),
            _ when this == Google => onGoogle(),
            _ when this == Grok => onGrok(),
            _ when this == Perplexity => onPerplexity(),
            _ => otherwise(Value)
        };

    public void Match(Action onAimode,
        Action onAioverview,
        Action onChatgpt,
        Action onCopilot,
        Action onGemini,
        Action onGoogle,
        Action onGrok,
        Action onPerplexity,
        Action<string> otherwise)
    {
        if (this == Aimode) onAimode();
        else if (this == Aioverview) onAioverview();
        else if (this == Chatgpt) onChatgpt();
        else if (this == Copilot) onCopilot();
        else if (this == Gemini) onGemini();
        else if (this == Google) onGoogle();
        else if (this == Grok) onGrok();
        else if (this == Perplexity) onPerplexity();
        else otherwise(Value);
    }
}
