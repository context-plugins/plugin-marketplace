using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The method of the vocabulary filter for the HealthScribe streaming session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyFilterMethodAmazonTranscribeServiceOperationsApi>))]
public sealed record VocabularyFilterMethodAmazonTranscribeServiceOperationsApi : OpenStringEnum<VocabularyFilterMethodAmazonTranscribeServiceOperationsApi>
{
    private VocabularyFilterMethodAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly VocabularyFilterMethodAmazonTranscribeServiceOperationsApi Remove = new("remove");

    public static readonly VocabularyFilterMethodAmazonTranscribeServiceOperationsApi Mask = new("mask");

    public static readonly VocabularyFilterMethodAmazonTranscribeServiceOperationsApi Tag = new("tag");

    public TResult Match<TResult>(Func<TResult> onRemove,
        Func<TResult> onMask,
        Func<TResult> onTag,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Remove => onRemove(),
            _ when this == Mask => onMask(),
            _ when this == Tag => onTag(),
            _ => otherwise(Value)
        };

    public void Match(Action onRemove, Action onMask, Action onTag, Action<string> otherwise)
    {
        if (this == Remove) onRemove();
        else if (this == Mask) onMask();
        else if (this == Tag) onTag();
        else otherwise(Value);
    }
}
