using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// Defaults to STANDARD. Set to CREDIT for customer-authored, term-bound discount lines whose amounts contribute negatively to invoice aggregates.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WritableOrderLineType>))]
public sealed record WritableOrderLineType : OpenStringEnum<WritableOrderLineType>
{
    private WritableOrderLineType(string value) : base(value)
    {
    }

    public static readonly WritableOrderLineType Standard = new("STANDARD");

    public static readonly WritableOrderLineType Credit = new("CREDIT");

    public TResult Match<TResult>(Func<TResult> onStandard, Func<TResult> onCredit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onCredit, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
