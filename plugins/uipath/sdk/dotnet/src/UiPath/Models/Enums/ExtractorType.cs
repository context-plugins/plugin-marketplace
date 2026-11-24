using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Technology category of the extractor model
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExtractorType>))]
public sealed record ExtractorType : OpenStringEnum<ExtractorType>
{
    private ExtractorType(string value) : base(value)
    {
    }

    public static readonly ExtractorType Specialized = new("Specialized");

    public static readonly ExtractorType GenerativeAi = new("GenerativeAI");

    public static readonly ExtractorType FormExtractor = new("FormExtractor");

    public static readonly ExtractorType IntelligentFormExtractor = new("IntelligentFormExtractor");

    public TResult Match<TResult>(Func<TResult> onSpecialized,
        Func<TResult> onGenerativeAi,
        Func<TResult> onFormExtractor,
        Func<TResult> onIntelligentFormExtractor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Specialized => onSpecialized(),
            _ when this == GenerativeAi => onGenerativeAi(),
            _ when this == FormExtractor => onFormExtractor(),
            _ when this == IntelligentFormExtractor => onIntelligentFormExtractor(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpecialized,
        Action onGenerativeAi,
        Action onFormExtractor,
        Action onIntelligentFormExtractor,
        Action<string> otherwise)
    {
        if (this == Specialized) onSpecialized();
        else if (this == GenerativeAi) onGenerativeAi();
        else if (this == FormExtractor) onFormExtractor();
        else if (this == IntelligentFormExtractor) onIntelligentFormExtractor();
        else otherwise(Value);
    }
}
