using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of resource that was imported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportedResourceType>))]
public sealed record ImportedResourceType : OpenStringEnum<ImportedResourceType>
{
    private ImportedResourceType(string value) : base(value)
    {
    }

    public static readonly ImportedResourceType Bot = new("Bot");

    public static readonly ImportedResourceType BotLocale = new("BotLocale");

    public static readonly ImportedResourceType CustomVocabulary = new("CustomVocabulary");

    public static readonly ImportedResourceType TestSet = new("TestSet");

    public TResult Match<TResult>(Func<TResult> onBot,
        Func<TResult> onBotLocale,
        Func<TResult> onCustomVocabulary,
        Func<TResult> onTestSet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bot => onBot(),
            _ when this == BotLocale => onBotLocale(),
            _ when this == CustomVocabulary => onCustomVocabulary(),
            _ when this == TestSet => onTestSet(),
            _ => otherwise(Value)
        };

    public void Match(Action onBot,
        Action onBotLocale,
        Action onCustomVocabulary,
        Action onTestSet,
        Action<string> otherwise)
    {
        if (this == Bot) onBot();
        else if (this == BotLocale) onBotLocale();
        else if (this == CustomVocabulary) onCustomVocabulary();
        else if (this == TestSet) onTestSet();
        else otherwise(Value);
    }
}
