using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// DeletedReasonType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DeletedReasonType>))]
public sealed record DeletedReasonType : OpenStringEnum<DeletedReasonType>
{
    private DeletedReasonType(string value) : base(value)
    {
    }

    public static readonly DeletedReasonType Cancelled = new("CANCELLED");

    public static readonly DeletedReasonType Lost = new("LOST");

    public static readonly DeletedReasonType Stolen = new("STOLEN");

    public static readonly DeletedReasonType Misplaced = new("MISPLACED");

    public static readonly DeletedReasonType FraudConfirmed = new("FRAUD_CONFIRMED");

    public static readonly DeletedReasonType SupersededByNewOrder = new("SUPERSEDED_BY_NEW_ORDER");

    public TResult Match<TResult>(Func<TResult> onCancelled,
        Func<TResult> onLost,
        Func<TResult> onStolen,
        Func<TResult> onMisplaced,
        Func<TResult> onFraudConfirmed,
        Func<TResult> onSupersededByNewOrder,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cancelled => onCancelled(),
            _ when this == Lost => onLost(),
            _ when this == Stolen => onStolen(),
            _ when this == Misplaced => onMisplaced(),
            _ when this == FraudConfirmed => onFraudConfirmed(),
            _ when this == SupersededByNewOrder => onSupersededByNewOrder(),
            _ => otherwise(Value)
        };

    public void Match(Action onCancelled,
        Action onLost,
        Action onStolen,
        Action onMisplaced,
        Action onFraudConfirmed,
        Action onSupersededByNewOrder,
        Action<string> otherwise)
    {
        if (this == Cancelled) onCancelled();
        else if (this == Lost) onLost();
        else if (this == Stolen) onStolen();
        else if (this == Misplaced) onMisplaced();
        else if (this == FraudConfirmed) onFraudConfirmed();
        else if (this == SupersededByNewOrder) onSupersededByNewOrder();
        else otherwise(Value);
    }
}
