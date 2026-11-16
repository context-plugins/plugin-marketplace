using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// <list type="bullet">
///   <item><description>Details the results of verifying <c>address</c> with the issuing bank.</description></item>
///   <item><description>Set to <b>UNKNOWN</b> when <c>address</c> gets updated.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AddressVerification3>))]
public sealed record AddressVerification3 : OpenStringEnum<AddressVerification3>
{
    private AddressVerification3(string value) : base(value)
    {
    }

    public static readonly AddressVerification3 PostalCodeAndStreetMatch = new("POSTAL_CODE_AND_STREET_MATCH");

    public static readonly AddressVerification3 StreetMatch = new("STREET_MATCH");

    public static readonly AddressVerification3 PostalCodeMatch = new("POSTAL_CODE_MATCH");

    public static readonly AddressVerification3 NoAddress = new("NO_ADDRESS");

    public static readonly AddressVerification3 NoMatch = new("NO_MATCH");

    public static readonly AddressVerification3 NotSupported = new("NOT_SUPPORTED");

    public static readonly AddressVerification3 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onPostalCodeAndStreetMatch,
        Func<TResult> onStreetMatch,
        Func<TResult> onPostalCodeMatch,
        Func<TResult> onNoAddress,
        Func<TResult> onNoMatch,
        Func<TResult> onNotSupported,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PostalCodeAndStreetMatch => onPostalCodeAndStreetMatch(),
            _ when this == StreetMatch => onStreetMatch(),
            _ when this == PostalCodeMatch => onPostalCodeMatch(),
            _ when this == NoAddress => onNoAddress(),
            _ when this == NoMatch => onNoMatch(),
            _ when this == NotSupported => onNotSupported(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onPostalCodeAndStreetMatch,
        Action onStreetMatch,
        Action onPostalCodeMatch,
        Action onNoAddress,
        Action onNoMatch,
        Action onNotSupported,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == PostalCodeAndStreetMatch) onPostalCodeAndStreetMatch();
        else if (this == StreetMatch) onStreetMatch();
        else if (this == PostalCodeMatch) onPostalCodeMatch();
        else if (this == NoAddress) onNoAddress();
        else if (this == NoMatch) onNoMatch();
        else if (this == NotSupported) onNotSupported();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
