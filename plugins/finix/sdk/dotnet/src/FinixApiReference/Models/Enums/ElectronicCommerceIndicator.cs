using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The result of the authentication, and the value that determines who carries chargeback liability for fraud.
/// <list type="bullet">
///   <item><description><c>AUTHENTICATED</c>: The issuer authenticated the <see href="/api/identities">buyer</see>. Liability for fraud chargebacks shifts to the issuer.</description></item>
///   <item><description><c>ATTEMPTED</c>: The issuer could not authenticate the buyer, so the card network authenticated on the issuer's behalf. Liability for fraud chargebacks shifts to the issuer.</description></item>
///   <item><description><c>NON_AUTHENTICATED</c>: The buyer was not authenticated. Liability for fraud chargebacks stays with the seller.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ElectronicCommerceIndicator>))]
public sealed record ElectronicCommerceIndicator : OpenStringEnum<ElectronicCommerceIndicator>
{
    private ElectronicCommerceIndicator(string value) : base(value)
    {
    }

    public static readonly ElectronicCommerceIndicator Authenticated = new("AUTHENTICATED");

    public static readonly ElectronicCommerceIndicator Attempted = new("ATTEMPTED");

    public static readonly ElectronicCommerceIndicator NonAuthenticated = new("NON_AUTHENTICATED");

    public TResult Match<TResult>(Func<TResult> onAuthenticated,
        Func<TResult> onAttempted,
        Func<TResult> onNonAuthenticated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Authenticated => onAuthenticated(),
            _ when this == Attempted => onAttempted(),
            _ when this == NonAuthenticated => onNonAuthenticated(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthenticated, Action onAttempted, Action onNonAuthenticated, Action<string> otherwise)
    {
        if (this == Authenticated) onAuthenticated();
        else if (this == Attempted) onAttempted();
        else if (this == NonAuthenticated) onNonAuthenticated();
        else otherwise(Value);
    }
}
