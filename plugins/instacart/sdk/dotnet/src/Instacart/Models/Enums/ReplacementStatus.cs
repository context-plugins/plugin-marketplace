using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The customer's decision on the replacement, if one was suggested.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReplacementStatus>))]
public sealed record ReplacementStatus : OpenStringEnum<ReplacementStatus>
{
    private ReplacementStatus(string value) : base(value)
    {
    }

    public static readonly ReplacementStatus Pending = new("PENDING");

    public static readonly ReplacementStatus Approved = new("APPROVED");

    public static readonly ReplacementStatus Rejected = new("REJECTED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onApproved, Action onRejected, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
