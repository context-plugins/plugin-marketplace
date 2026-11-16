using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The result of verifying the cardholder's last name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LastName>))]
public sealed record LastName : OpenStringEnum<LastName>
{
    private LastName(string value) : base(value)
    {
    }

    public static readonly LastName MatchMember = new("MATCH");

    public static readonly LastName Matched = new("MATCHED");

    public static readonly LastName NoMatch = new("NO_MATCH");

    public static readonly LastName NotSupported = new("NOT_SUPPORTED");

    public static readonly LastName PartialMatch = new("PARTIAL_MATCH");

    public static readonly LastName Unknown = new("UNKNOWN");

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
