using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The resource type that caused the change to the <c>Balance</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType>))]
public sealed record EntityType : OpenStringEnum<EntityType>
{
    private EntityType(string value) : base(value)
    {
    }

    public static readonly EntityType BalanceAdjustment = new("BALANCE_ADJUSTMENT");

    public static readonly EntityType Transfer = new("TRANSFER");

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
