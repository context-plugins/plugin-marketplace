using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Email = new("email");

    public static readonly Type1 Phone = new("phone");

    public static readonly Type1 Ssn = new("ssn");

    public static readonly Type1 CreditCard = new("credit_card");

    public static readonly Type1 IpAddress = new("ip_address");

    public static readonly Type1 Iban = new("iban");

    public static readonly Type1 UsBankRouting = new("us_bank_routing");

    public static readonly Type1 Person = new("person");

    public static readonly Type1 Organization = new("organization");

    public static readonly Type1 Location = new("location");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onPhone,
        Func<TResult> onSsn,
        Func<TResult> onCreditCard,
        Func<TResult> onIpAddress,
        Func<TResult> onIban,
        Func<TResult> onUsBankRouting,
        Func<TResult> onPerson,
        Func<TResult> onOrganization,
        Func<TResult> onLocation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Phone => onPhone(),
            _ when this == Ssn => onSsn(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == IpAddress => onIpAddress(),
            _ when this == Iban => onIban(),
            _ when this == UsBankRouting => onUsBankRouting(),
            _ when this == Person => onPerson(),
            _ when this == Organization => onOrganization(),
            _ when this == Location => onLocation(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail,
        Action onPhone,
        Action onSsn,
        Action onCreditCard,
        Action onIpAddress,
        Action onIban,
        Action onUsBankRouting,
        Action onPerson,
        Action onOrganization,
        Action onLocation,
        Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Phone) onPhone();
        else if (this == Ssn) onSsn();
        else if (this == CreditCard) onCreditCard();
        else if (this == IpAddress) onIpAddress();
        else if (this == Iban) onIban();
        else if (this == UsBankRouting) onUsBankRouting();
        else if (this == Person) onPerson();
        else if (this == Organization) onOrganization();
        else if (this == Location) onLocation();
        else otherwise(Value);
    }
}
