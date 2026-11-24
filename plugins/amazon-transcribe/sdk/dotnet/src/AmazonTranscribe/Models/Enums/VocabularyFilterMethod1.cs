using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify how you want your custom vocabulary filter applied to the streaming session. To replace words with ***, specify mask. To delete words, specify remove. To flag words without changing them, specify tag.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VocabularyFilterMethod1>))]
public sealed record VocabularyFilterMethod1 : OpenStringEnum<VocabularyFilterMethod1>
{
    private VocabularyFilterMethod1(string value) : base(value)
    {
    }

    public static readonly VocabularyFilterMethod1 Remove = new("remove");

    public static readonly VocabularyFilterMethod1 Mask = new("mask");

    public static readonly VocabularyFilterMethod1 Tag = new("tag");

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
