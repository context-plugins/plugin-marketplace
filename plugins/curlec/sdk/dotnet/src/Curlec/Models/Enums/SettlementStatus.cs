using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Settlement status of the transferred funds in the Linked Account.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SettlementStatus>))]
public sealed record SettlementStatus : OpenStringEnum<SettlementStatus>
{
    private SettlementStatus(string value) : base(value)
    {
    }

    public static readonly SettlementStatus Pending = new("pending");

    public static readonly SettlementStatus OnHold = new("on_hold");

    public static readonly SettlementStatus Settled = new("settled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onOnHold,
        Func<TResult> onSettled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == OnHold => onOnHold(),
            _ when this == Settled => onSettled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onOnHold, Action onSettled, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == OnHold) onOnHold();
        else if (this == Settled) onSettled();
        else otherwise(Value);
    }
}
