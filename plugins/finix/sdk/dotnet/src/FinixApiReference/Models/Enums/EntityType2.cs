using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of the related entity.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType2>))]
public sealed record EntityType2 : OpenStringEnum<EntityType2>
{
    private EntityType2(string value) : base(value)
    {
    }

    public static readonly EntityType2 Transfer = new("TRANSFER");

    public static readonly EntityType2 CustomFee = new("CUSTOM_FEE");

    public static readonly EntityType2 SplitTransfer = new("SPLIT_TRANSFER");

    public static readonly EntityType2 Fee = new("FEE");

    public TResult Match<TResult>(Func<TResult> onTransfer,
        Func<TResult> onCustomFee,
        Func<TResult> onSplitTransfer,
        Func<TResult> onFee,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transfer => onTransfer(),
            _ when this == CustomFee => onCustomFee(),
            _ when this == SplitTransfer => onSplitTransfer(),
            _ when this == Fee => onFee(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransfer,
        Action onCustomFee,
        Action onSplitTransfer,
        Action onFee,
        Action<string> otherwise)
    {
        if (this == Transfer) onTransfer();
        else if (this == CustomFee) onCustomFee();
        else if (this == SplitTransfer) onSplitTransfer();
        else if (this == Fee) onFee();
        else otherwise(Value);
    }
}
