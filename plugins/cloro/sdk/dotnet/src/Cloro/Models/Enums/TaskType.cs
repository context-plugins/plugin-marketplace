using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// The AI provider to use for this task.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaskType>))]
public sealed record TaskType : OpenStringEnum<TaskType>
{
    private TaskType(string value) : base(value)
    {
    }

    public static readonly TaskType Aimode = new("AIMODE");

    public static readonly TaskType Google = new("GOOGLE");

    public static readonly TaskType GoogleNews = new("GOOGLE_NEWS");

    public static readonly TaskType Gemini = new("GEMINI");

    public static readonly TaskType Chatgpt = new("CHATGPT");

    public static readonly TaskType Copilot = new("COPILOT");

    public static readonly TaskType Perplexity = new("PERPLEXITY");

    public static readonly TaskType Grok = new("GROK");

    public TResult Match<TResult>(Func<TResult> onAimode,
        Func<TResult> onGoogle,
        Func<TResult> onGoogleNews,
        Func<TResult> onGemini,
        Func<TResult> onChatgpt,
        Func<TResult> onCopilot,
        Func<TResult> onPerplexity,
        Func<TResult> onGrok,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aimode => onAimode(),
            _ when this == Google => onGoogle(),
            _ when this == GoogleNews => onGoogleNews(),
            _ when this == Gemini => onGemini(),
            _ when this == Chatgpt => onChatgpt(),
            _ when this == Copilot => onCopilot(),
            _ when this == Perplexity => onPerplexity(),
            _ when this == Grok => onGrok(),
            _ => otherwise(Value)
        };

    public void Match(Action onAimode,
        Action onGoogle,
        Action onGoogleNews,
        Action onGemini,
        Action onChatgpt,
        Action onCopilot,
        Action onPerplexity,
        Action onGrok,
        Action<string> otherwise)
    {
        if (this == Aimode) onAimode();
        else if (this == Google) onGoogle();
        else if (this == GoogleNews) onGoogleNews();
        else if (this == Gemini) onGemini();
        else if (this == Chatgpt) onChatgpt();
        else if (this == Copilot) onCopilot();
        else if (this == Perplexity) onPerplexity();
        else if (this == Grok) onGrok();
        else otherwise(Value);
    }
}
