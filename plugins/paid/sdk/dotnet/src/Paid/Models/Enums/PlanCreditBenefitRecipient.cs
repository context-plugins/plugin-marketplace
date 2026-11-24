using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlanCreditBenefitRecipient>))]
public sealed record PlanCreditBenefitRecipient : OpenStringEnum<PlanCreditBenefitRecipient>
{
    private PlanCreditBenefitRecipient(string value) : base(value)
    {
    }

    public static readonly PlanCreditBenefitRecipient Organization = new("organization");

    public static readonly PlanCreditBenefitRecipient Seat = new("seat");

    public TResult Match<TResult>(Func<TResult> onOrganization,
        Func<TResult> onSeat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Organization => onOrganization(),
            _ when this == Seat => onSeat(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrganization, Action onSeat, Action<string> otherwise)
    {
        if (this == Organization) onOrganization();
        else if (this == Seat) onSeat();
        else otherwise(Value);
    }
}
