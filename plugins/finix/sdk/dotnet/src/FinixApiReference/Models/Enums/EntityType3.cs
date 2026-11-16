using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The entity the <c>Settlement Queue Entry</c> is linked to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType3>))]
public sealed record EntityType3 : OpenStringEnum<EntityType3>
{
    private EntityType3(string value) : base(value)
    {
    }

    public static readonly EntityType3 Adjustment = new("ADJUSTMENT");

    public static readonly EntityType3 DisputeTransfer = new("DISPUTE_TRANSFER");

    public static readonly EntityType3 Fee = new("FEE");

    public static readonly EntityType3 Transfer = new("TRANSFER");

    public static readonly EntityType3 Reverse = new("REVERSE");

    public static readonly EntityType3 SplitTransfer = new("SPLIT_TRANSFER");

    public TResult Match<TResult>(Func<TResult> onAdjustment,
        Func<TResult> onDisputeTransfer,
        Func<TResult> onFee,
        Func<TResult> onTransfer,
        Func<TResult> onReverse,
        Func<TResult> onSplitTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Adjustment => onAdjustment(),
            _ when this == DisputeTransfer => onDisputeTransfer(),
            _ when this == Fee => onFee(),
            _ when this == Transfer => onTransfer(),
            _ when this == Reverse => onReverse(),
            _ when this == SplitTransfer => onSplitTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdjustment,
        Action onDisputeTransfer,
        Action onFee,
        Action onTransfer,
        Action onReverse,
        Action onSplitTransfer,
        Action<string> otherwise)
    {
        if (this == Adjustment) onAdjustment();
        else if (this == DisputeTransfer) onDisputeTransfer();
        else if (this == Fee) onFee();
        else if (this == Transfer) onTransfer();
        else if (this == Reverse) onReverse();
        else if (this == SplitTransfer) onSplitTransfer();
        else otherwise(Value);
    }
}
