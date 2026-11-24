using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

/// <summary>
/// Explicit normalized outcome only; elapsed time alone is not treated as a sale.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OutcomeStatus>))]
public sealed record OutcomeStatus : OpenStringEnum<OutcomeStatus>
{
    private OutcomeStatus(string value) : base(value)
    {
    }

    public static readonly OutcomeStatus Sold = new("Sold");

    public static readonly OutcomeStatus SoldOnApproval = new("Sold on Approval");

    public static readonly OutcomeStatus NotSold = new("Not Sold");

    public static readonly OutcomeStatus Removed = new("Removed");

    public TResult Match<TResult>(Func<TResult> onSold,
        Func<TResult> onSoldOnApproval,
        Func<TResult> onNotSold,
        Func<TResult> onRemoved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sold => onSold(),
            _ when this == SoldOnApproval => onSoldOnApproval(),
            _ when this == NotSold => onNotSold(),
            _ when this == Removed => onRemoved(),
            _ => otherwise(Value)
        };

    public void Match(Action onSold,
        Action onSoldOnApproval,
        Action onNotSold,
        Action onRemoved,
        Action<string> otherwise)
    {
        if (this == Sold) onSold();
        else if (this == SoldOnApproval) onSoldOnApproval();
        else if (this == NotSold) onNotSold();
        else if (this == Removed) onRemoved();
        else otherwise(Value);
    }
}
