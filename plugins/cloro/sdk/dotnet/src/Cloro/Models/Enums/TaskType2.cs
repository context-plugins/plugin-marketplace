using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// The AI provider to use for this task.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaskType2>))]
public sealed record TaskType2 : OpenStringEnum<TaskType2>
{
    private TaskType2(string value) : base(value)
    {
    }

    public static readonly TaskType2 Aimode = new("AIMODE");

    public static readonly TaskType2 Google = new("GOOGLE");

    public static readonly TaskType2 GoogleNews = new("GOOGLE_NEWS");

    public static readonly TaskType2 GoogleProduct = new("GOOGLE_PRODUCT");

    public static readonly TaskType2 Gemini = new("GEMINI");

    public static readonly TaskType2 Chatgpt = new("CHATGPT");

    public static readonly TaskType2 Copilot = new("COPILOT");

    public static readonly TaskType2 Perplexity = new("PERPLEXITY");

    public TResult Match<TResult>(Func<TResult> onAimode,
        Func<TResult> onGoogle,
        Func<TResult> onGoogleNews,
        Func<TResult> onGoogleProduct,
        Func<TResult> onGemini,
        Func<TResult> onChatgpt,
        Func<TResult> onCopilot,
        Func<TResult> onPerplexity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aimode => onAimode(),
            _ when this == Google => onGoogle(),
            _ when this == GoogleNews => onGoogleNews(),
            _ when this == GoogleProduct => onGoogleProduct(),
            _ when this == Gemini => onGemini(),
            _ when this == Chatgpt => onChatgpt(),
            _ when this == Copilot => onCopilot(),
            _ when this == Perplexity => onPerplexity(),
            _ => otherwise(Value)
        };

    public void Match(Action onAimode,
        Action onGoogle,
        Action onGoogleNews,
        Action onGoogleProduct,
        Action onGemini,
        Action onChatgpt,
        Action onCopilot,
        Action onPerplexity,
        Action<string> otherwise)
    {
        if (this == Aimode) onAimode();
        else if (this == Google) onGoogle();
        else if (this == GoogleNews) onGoogleNews();
        else if (this == GoogleProduct) onGoogleProduct();
        else if (this == Gemini) onGemini();
        else if (this == Chatgpt) onChatgpt();
        else if (this == Copilot) onCopilot();
        else if (this == Perplexity) onPerplexity();
        else otherwise(Value);
    }
}
