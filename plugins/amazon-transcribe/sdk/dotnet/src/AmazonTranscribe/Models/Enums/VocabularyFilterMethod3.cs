using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the vocabulary filtering method used in your transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyFilterMethod3>))]
public sealed record VocabularyFilterMethod3 : OpenStringEnum<VocabularyFilterMethod3>
{
    private VocabularyFilterMethod3(string value) : base(value)
    {
    }

    public static readonly VocabularyFilterMethod3 Remove = new("remove");

    public static readonly VocabularyFilterMethod3 Mask = new("mask");

    public static readonly VocabularyFilterMethod3 Tag = new("tag");

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
