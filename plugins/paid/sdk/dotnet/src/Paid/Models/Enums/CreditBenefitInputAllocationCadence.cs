using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreditBenefitInputAllocationCadence>))]
public sealed record CreditBenefitInputAllocationCadence : OpenStringEnum<CreditBenefitInputAllocationCadence>
{
    private CreditBenefitInputAllocationCadence(string value) : base(value)
    {
    }

    public static readonly CreditBenefitInputAllocationCadence Upfront = new("upfront");

    public static readonly CreditBenefitInputAllocationCadence Monthly = new("monthly");

    public TResult Match<TResult>(Func<TResult> onUpfront, Func<TResult> onMonthly, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Upfront => onUpfront(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpfront, Action onMonthly, Action<string> otherwise)
    {
        if (this == Upfront) onUpfront();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
