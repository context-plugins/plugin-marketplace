using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The result of verifying the cardholder's full name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NameVerification2>))]
public sealed record NameVerification2 : OpenStringEnum<NameVerification2>
{
    private NameVerification2(string value) : base(value)
    {
    }

    public static readonly NameVerification2 MatchMember = new("MATCH");

    public static readonly NameVerification2 Matched = new("MATCHED");

    public static readonly NameVerification2 NoMatch = new("NO_MATCH");

    public static readonly NameVerification2 NotSupported = new("NOT_SUPPORTED");

    public static readonly NameVerification2 PartialMatch = new("PARTIAL_MATCH");

    public static readonly NameVerification2 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onMatchMember,
        Func<TResult> onMatched,
        Func<TResult> onNoMatch,
        Func<TResult> onNotSupported,
        Func<TResult> onPartialMatch,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MatchMember => onMatchMember(),
            _ when this == Matched => onMatched(),
            _ when this == NoMatch => onNoMatch(),
            _ when this == NotSupported => onNotSupported(),
            _ when this == PartialMatch => onPartialMatch(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatchMember,
        Action onMatched,
        Action onNoMatch,
        Action onNotSupported,
        Action onPartialMatch,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == MatchMember) onMatchMember();
        else if (this == Matched) onMatched();
        else if (this == NoMatch) onNoMatch();
        else if (this == NotSupported) onNotSupported();
        else if (this == PartialMatch) onPartialMatch();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
