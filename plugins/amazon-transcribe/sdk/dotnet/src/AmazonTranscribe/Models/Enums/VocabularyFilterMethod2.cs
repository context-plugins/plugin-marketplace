using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the vocabulary filtering method used in your Call Analytics transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyFilterMethod2>))]
public sealed record VocabularyFilterMethod2 : OpenStringEnum<VocabularyFilterMethod2>
{
    private VocabularyFilterMethod2(string value) : base(value)
    {
    }

    public static readonly VocabularyFilterMethod2 Remove = new("remove");

    public static readonly VocabularyFilterMethod2 Mask = new("mask");

    public static readonly VocabularyFilterMethod2 Tag = new("tag");

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
