using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProductCreditBenefitInputRecipient>))]
public sealed record ProductCreditBenefitInputRecipient : OpenStringEnum<ProductCreditBenefitInputRecipient>
{
    private ProductCreditBenefitInputRecipient(string value) : base(value)
    {
    }

    public static readonly ProductCreditBenefitInputRecipient Organization = new("organization");

    public static readonly ProductCreditBenefitInputRecipient Seat = new("seat");

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
