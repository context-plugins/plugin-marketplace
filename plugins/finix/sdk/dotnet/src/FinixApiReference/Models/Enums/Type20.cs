using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// A label indicating the type of update applied to the <c>Payment Instrument</c>. The following enums are possible:
/// <list type="bullet">
///   <item><description><c>CONTACT_CARDHOLDER</c>: The cardholder has opted out of the service. Please get in touch with the cardholder to acquire up-to-date card information.</description></item>
///   <item><description><c>FRAUD_REPORTED</c>: Fraud was reported by the <c>Merchant</c>.</description></item>
///   <item><description><c>NUMBER_AND_EXPIRATION_UPDATED</c>: Both the card number and expiry date changed.</description></item>
///   <item><description><c>NUMBER_UPDATED</c>: The card number has changed.</description></item>
///   <item><description><c>NOT_FOUND</c>: The issuing bank does not participate in account updater. This enumerator will only be returned once.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type20>))]
public sealed record Type20 : OpenStringEnum<Type20>
{
    private Type20(string value) : base(value)
    {
    }

    public static readonly Type20 ContactCardholder = new("CONTACT_CARDHOLDER");

    public static readonly Type20 FraudReported = new("FRAUD_REPORTED");

    public static readonly Type20 NotFound = new("NOT_FOUND");

    public static readonly Type20 NumberAndExpirationUpdated = new("NUMBER_AND_EXPIRATION_UPDATED");

    public static readonly Type20 NumberUpdated = new("NUMBER_UPDATED");

    public TResult Match<TResult>(Func<TResult> onContactCardholder,
        Func<TResult> onFraudReported,
        Func<TResult> onNotFound,
        Func<TResult> onNumberAndExpirationUpdated,
        Func<TResult> onNumberUpdated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ContactCardholder => onContactCardholder(),
            _ when this == FraudReported => onFraudReported(),
            _ when this == NotFound => onNotFound(),
            _ when this == NumberAndExpirationUpdated => onNumberAndExpirationUpdated(),
            _ when this == NumberUpdated => onNumberUpdated(),
            _ => otherwise(Value)
        };

    public void Match(Action onContactCardholder,
        Action onFraudReported,
        Action onNotFound,
        Action onNumberAndExpirationUpdated,
        Action onNumberUpdated,
        Action<string> otherwise)
    {
        if (this == ContactCardholder) onContactCardholder();
        else if (this == FraudReported) onFraudReported();
        else if (this == NotFound) onNotFound();
        else if (this == NumberAndExpirationUpdated) onNumberAndExpirationUpdated();
        else if (this == NumberUpdated) onNumberUpdated();
        else otherwise(Value);
    }
}
