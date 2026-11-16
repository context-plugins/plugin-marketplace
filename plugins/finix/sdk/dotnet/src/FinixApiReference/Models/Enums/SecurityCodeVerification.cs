using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the results of the Card Verification Code check.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SecurityCodeVerification>))]
public sealed record SecurityCodeVerification : OpenStringEnum<SecurityCodeVerification>
{
    private SecurityCodeVerification(string value) : base(value)
    {
    }

    public static readonly SecurityCodeVerification Matched = new("MATCHED");

    public static readonly SecurityCodeVerification Unknown = new("UNKNOWN");

    public static readonly SecurityCodeVerification Unmatched = new("UNMATCHED");

    public TResult Match<TResult>(Func<TResult> onMatched,
        Func<TResult> onUnknown,
        Func<TResult> onUnmatched,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Matched => onMatched(),
            _ when this == Unknown => onUnknown(),
            _ when this == Unmatched => onUnmatched(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatched, Action onUnknown, Action onUnmatched, Action<string> otherwise)
    {
        if (this == Matched) onMatched();
        else if (this == Unknown) onUnknown();
        else if (this == Unmatched) onUnmatched();
        else otherwise(Value);
    }
}
