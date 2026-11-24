using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Options in place for repayments. If absent, the lending rate is applicable to all repayment types.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RepaymentType>))]
public sealed record RepaymentType : OpenStringEnum<RepaymentType>
{
    private RepaymentType(string value) : base(value)
    {
    }

    public static readonly RepaymentType InterestOnly = new("INTEREST_ONLY");

    public static readonly RepaymentType PrincipalAndInterest = new("PRINCIPAL_AND_INTEREST");

    public TResult Match<TResult>(Func<TResult> onInterestOnly,
        Func<TResult> onPrincipalAndInterest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InterestOnly => onInterestOnly(),
            _ when this == PrincipalAndInterest => onPrincipalAndInterest(),
            _ => otherwise(Value)
        };

    public void Match(Action onInterestOnly, Action onPrincipalAndInterest, Action<string> otherwise)
    {
        if (this == InterestOnly) onInterestOnly();
        else if (this == PrincipalAndInterest) onPrincipalAndInterest();
        else otherwise(Value);
    }
}
