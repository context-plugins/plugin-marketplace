using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlanCreditBenefitRolloverDurationUnit>))]
public sealed record PlanCreditBenefitRolloverDurationUnit : OpenStringEnum<PlanCreditBenefitRolloverDurationUnit>
{
    private PlanCreditBenefitRolloverDurationUnit(string value) : base(value)
    {
    }

    public static readonly PlanCreditBenefitRolloverDurationUnit Days = new("days");

    public static readonly PlanCreditBenefitRolloverDurationUnit Months = new("months");

    public TResult Match<TResult>(Func<TResult> onDays, Func<TResult> onMonths, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Days => onDays(),
            _ when this == Months => onMonths(),
            _ => otherwise(Value)
        };

    public void Match(Action onDays, Action onMonths, Action<string> otherwise)
    {
        if (this == Days) onDays();
        else if (this == Months) onMonths();
        else otherwise(Value);
    }
}
