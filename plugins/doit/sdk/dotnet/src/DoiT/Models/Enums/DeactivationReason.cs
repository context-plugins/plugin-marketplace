using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Why the anomaly stopped being active. <c>reverted</c> means the cost returned inside the expected normal range; <c>expired</c> means the anomaly was deactivated without the cost returning inside that range; <c>unknown</c> means the reason could not be determined. Null while the anomaly is still active.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DeactivationReason>))]
public sealed record DeactivationReason : OpenStringEnum<DeactivationReason>
{
    private DeactivationReason(string value) : base(value)
    {
    }

    public static readonly DeactivationReason Reverted = new("reverted");

    public static readonly DeactivationReason Expired = new("expired");

    public static readonly DeactivationReason Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onReverted,
        Func<TResult> onExpired,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reverted => onReverted(),
            _ when this == Expired => onExpired(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onReverted, Action onExpired, Action onUnknown, Action<string> otherwise)
    {
        if (this == Reverted) onReverted();
        else if (this == Expired) onExpired();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
