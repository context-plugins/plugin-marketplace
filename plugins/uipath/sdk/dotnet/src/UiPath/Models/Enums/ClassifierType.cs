using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Technology category of the classifier model
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClassifierType>))]
public sealed record ClassifierType : OpenStringEnum<ClassifierType>
{
    private ClassifierType(string value) : base(value)
    {
    }

    public static readonly ClassifierType Specialized = new("Specialized");

    public static readonly ClassifierType GenerativeAi = new("GenerativeAI");

    public static readonly ClassifierType KeywordBased = new("KeywordBased");

    public TResult Match<TResult>(Func<TResult> onSpecialized,
        Func<TResult> onGenerativeAi,
        Func<TResult> onKeywordBased,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Specialized => onSpecialized(),
            _ when this == GenerativeAi => onGenerativeAi(),
            _ when this == KeywordBased => onKeywordBased(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpecialized, Action onGenerativeAi, Action onKeywordBased, Action<string> otherwise)
    {
        if (this == Specialized) onSpecialized();
        else if (this == GenerativeAi) onGenerativeAi();
        else if (this == KeywordBased) onKeywordBased();
        else otherwise(Value);
    }
}
