using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityType9>))]
public sealed record EntityType9 : OpenStringEnum<EntityType9>
{
    private EntityType9(string value) : base(value)
    {
    }

    public static readonly EntityType9 Adjustment = new("ADJUSTMENT");

    public static readonly EntityType9 DisputeTransfer = new("DISPUTE_TRANSFER");

    public static readonly EntityType9 Fee = new("FEE");

    public static readonly EntityType9 Reverse = new("REVERSE");

    public static readonly EntityType9 SplitTransfer = new("SPLIT_TRANSFER");

    public static readonly EntityType9 Transfer = new("TRANSFER");

    public TResult Match<TResult>(Func<TResult> onAdjustment,
        Func<TResult> onDisputeTransfer,
        Func<TResult> onFee,
        Func<TResult> onReverse,
        Func<TResult> onSplitTransfer,
        Func<TResult> onTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Adjustment => onAdjustment(),
            _ when this == DisputeTransfer => onDisputeTransfer(),
            _ when this == Fee => onFee(),
            _ when this == Reverse => onReverse(),
            _ when this == SplitTransfer => onSplitTransfer(),
            _ when this == Transfer => onTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdjustment,
        Action onDisputeTransfer,
        Action onFee,
        Action onReverse,
        Action onSplitTransfer,
        Action onTransfer,
        Action<string> otherwise)
    {
        if (this == Adjustment) onAdjustment();
        else if (this == DisputeTransfer) onDisputeTransfer();
        else if (this == Fee) onFee();
        else if (this == Reverse) onReverse();
        else if (this == SplitTransfer) onSplitTransfer();
        else if (this == Transfer) onTransfer();
        else otherwise(Value);
    }
}
