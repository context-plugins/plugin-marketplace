using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// How the buyer was authenticated. This field is populated when <c>state</c> is <c>SUCCEEDED</c>.
/// <list type="bullet">
///   <item><description><c>FRICTIONLESS</c>: The issuer authenticated the buyer from the data in the request, without presenting a challenge.</description></item>
///   <item><description><c>CHALLENGE</c>: The issuer presented the buyer with a challenge, such as a one-time passcode.</description></item>
///   <item><description><c>ATTEMPT</c>: The card network authenticated on the issuer's behalf.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthenticationType>))]
public sealed record AuthenticationType : OpenStringEnum<AuthenticationType>
{
    private AuthenticationType(string value) : base(value)
    {
    }

    public static readonly AuthenticationType Frictionless = new("FRICTIONLESS");

    public static readonly AuthenticationType Challenge = new("CHALLENGE");

    public static readonly AuthenticationType Attempt = new("ATTEMPT");

    public TResult Match<TResult>(Func<TResult> onFrictionless,
        Func<TResult> onChallenge,
        Func<TResult> onAttempt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Frictionless => onFrictionless(),
            _ when this == Challenge => onChallenge(),
            _ when this == Attempt => onAttempt(),
            _ => otherwise(Value)
        };

    public void Match(Action onFrictionless, Action onChallenge, Action onAttempt, Action<string> otherwise)
    {
        if (this == Frictionless) onFrictionless();
        else if (this == Challenge) onChallenge();
        else if (this == Attempt) onAttempt();
        else otherwise(Value);
    }
}
