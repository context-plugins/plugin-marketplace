using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode2>))]
public sealed record Mode2 : OpenStringEnum<Mode2>
{
    private Mode2(string value) : base(value)
    {
    }

    public static readonly Mode2 MultiClass = new("MULTI_CLASS");

    public static readonly Mode2 MultiLabel = new("MULTI_LABEL");

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
