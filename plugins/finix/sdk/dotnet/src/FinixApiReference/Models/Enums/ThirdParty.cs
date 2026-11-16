using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// This field identifies the external service used to connect the bank account.
/// <list type="bullet">
///   <item><description><c>PLAID</c> indicates that the account details are being sourced via Plaid.</description></item>
///   <item><description><c>PLAID_RESELLER</c> indicates that the account details are being sourced via Plaid using Finix's Reseller flow.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ThirdParty>))]
public sealed record ThirdParty : OpenStringEnum<ThirdParty>
{
    private ThirdParty(string value) : base(value)
    {
    }

    public static readonly ThirdParty Plaid = new("PLAID");

    public static readonly ThirdParty PlaidReseller = new("PLAID_RESELLER");

    public TResult Match<TResult>(Func<TResult> onPlaid,
        Func<TResult> onPlaidReseller,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Plaid => onPlaid(),
            _ when this == PlaidReseller => onPlaidReseller(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlaid, Action onPlaidReseller, Action<string> otherwise)
    {
        if (this == Plaid) onPlaid();
        else if (this == PlaidReseller) onPlaidReseller();
        else otherwise(Value);
    }
}
