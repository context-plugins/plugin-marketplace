using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// The AI provider for this task.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaskType5>))]
public sealed record TaskType5 : OpenStringEnum<TaskType5>
{
    private TaskType5(string value) : base(value)
    {
    }

    public static readonly TaskType5 Aimode = new("AIMODE");

    public static readonly TaskType5 BingAimode = new("BING_AIMODE");

    public static readonly TaskType5 Google = new("GOOGLE");

    public static readonly TaskType5 GoogleNews = new("GOOGLE_NEWS");

    public static readonly TaskType5 GoogleProduct = new("GOOGLE_PRODUCT");

    public static readonly TaskType5 Gemini = new("GEMINI");

    public static readonly TaskType5 Chatgpt = new("CHATGPT");

    public TResult Match<TResult>(Func<TResult> onAimode,
        Func<TResult> onBingAimode,
        Func<TResult> onGoogle,
        Func<TResult> onGoogleNews,
        Func<TResult> onGoogleProduct,
        Func<TResult> onGemini,
        Func<TResult> onChatgpt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aimode => onAimode(),
            _ when this == BingAimode => onBingAimode(),
            _ when this == Google => onGoogle(),
            _ when this == GoogleNews => onGoogleNews(),
            _ when this == GoogleProduct => onGoogleProduct(),
            _ when this == Gemini => onGemini(),
            _ when this == Chatgpt => onChatgpt(),
            _ => otherwise(Value)
        };

    public void Match(Action onAimode,
        Action onBingAimode,
        Action onGoogle,
        Action onGoogleNews,
        Action onGoogleProduct,
        Action onGemini,
        Action onChatgpt,
        Action<string> otherwise)
    {
        if (this == Aimode) onAimode();
        else if (this == BingAimode) onBingAimode();
        else if (this == Google) onGoogle();
        else if (this == GoogleNews) onGoogleNews();
        else if (this == GoogleProduct) onGoogleProduct();
        else if (this == Gemini) onGemini();
        else if (this == Chatgpt) onChatgpt();
        else otherwise(Value);
    }
}
