using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode MultiClass = new("MULTI_CLASS");

    public static readonly Mode MultiLabel = new("MULTI_LABEL");

    public TResult Match<TResult>(Func<TResult> onMultiClass,
        Func<TResult> onMultiLabel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MultiClass => onMultiClass(),
            _ when this == MultiLabel => onMultiLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onMultiClass, Action onMultiLabel, Action<string> otherwise)
    {
        if (this == MultiClass) onMultiClass();
        else if (this == MultiLabel) onMultiLabel();
        else otherwise(Value);
    }
}
