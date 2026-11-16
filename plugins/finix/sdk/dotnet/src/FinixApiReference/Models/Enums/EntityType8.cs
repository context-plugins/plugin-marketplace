using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityType8>))]
public sealed record EntityType8 : OpenStringEnum<EntityType8>
{
    private EntityType8(string value) : base(value)
    {
    }

    public static readonly EntityType8 BalanceAdjustment = new("BALANCE_ADJUSTMENT");

    public static readonly EntityType8 Transfer = new("TRANSFER");

    public TResult Match<TResult>(Func<TResult> onBalanceAdjustment,
        Func<TResult> onTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BalanceAdjustment => onBalanceAdjustment(),
            _ when this == Transfer => onTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onBalanceAdjustment, Action onTransfer, Action<string> otherwise)
    {
        if (this == BalanceAdjustment) onBalanceAdjustment();
        else if (this == Transfer) onTransfer();
        else otherwise(Value);
    }
}
