using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FilterBy>))]
public sealed record FilterBy : OpenStringEnum<FilterBy>
{
    private FilterBy(string value) : base(value)
    {
    }

    public static readonly FilterBy PhoneNumbers = new("phoneNumbers");

    public static readonly FilterBy EmailAddresses = new("emailAddresses");

    public TResult Match<TResult>(Func<TResult> onPhoneNumbers,
        Func<TResult> onEmailAddresses,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PhoneNumbers => onPhoneNumbers(),
            _ when this == EmailAddresses => onEmailAddresses(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhoneNumbers, Action onEmailAddresses, Action<string> otherwise)
    {
        if (this == PhoneNumbers) onPhoneNumbers();
        else if (this == EmailAddresses) onEmailAddresses();
        else otherwise(Value);
    }
}
