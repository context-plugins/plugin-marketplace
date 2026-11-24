using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LoanPurpose>))]
public sealed record LoanPurpose : OpenStringEnum<LoanPurpose>
{
    private LoanPurpose(string value) : base(value)
    {
    }

    public static readonly LoanPurpose Investment = new("INVESTMENT");

    public static readonly LoanPurpose OwnerOccupied = new("OWNER_OCCUPIED");

    public TResult Match<TResult>(Func<TResult> onInvestment,
        Func<TResult> onOwnerOccupied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Investment => onInvestment(),
            _ when this == OwnerOccupied => onOwnerOccupied(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvestment, Action onOwnerOccupied, Action<string> otherwise)
    {
        if (this == Investment) onInvestment();
        else if (this == OwnerOccupied) onOwnerOccupied();
        else otherwise(Value);
    }
}
