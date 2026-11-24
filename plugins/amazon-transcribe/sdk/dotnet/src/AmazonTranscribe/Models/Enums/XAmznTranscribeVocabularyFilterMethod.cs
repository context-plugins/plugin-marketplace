using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeVocabularyFilterMethod>))]
public sealed record XAmznTranscribeVocabularyFilterMethod : OpenStringEnum<XAmznTranscribeVocabularyFilterMethod>
{
    private XAmznTranscribeVocabularyFilterMethod(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeVocabularyFilterMethod Remove = new("remove");

    public static readonly XAmznTranscribeVocabularyFilterMethod Mask = new("mask");

    public static readonly XAmznTranscribeVocabularyFilterMethod Tag = new("tag");

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
