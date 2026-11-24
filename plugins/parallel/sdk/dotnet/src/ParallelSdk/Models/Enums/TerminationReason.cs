using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TerminationReason>))]
public sealed record TerminationReason : OpenStringEnum<TerminationReason>
{
    private TerminationReason(string value) : base(value)
    {
    }

    public static readonly TerminationReason LowMatchRate = new("low_match_rate");

    public static readonly TerminationReason MatchLimitMet = new("match_limit_met");

    public static readonly TerminationReason CandidatesExhausted = new("candidates_exhausted");

    public static readonly TerminationReason UserCancelled = new("user_cancelled");

    public static readonly TerminationReason ErrorOccurred = new("error_occurred");

    public static readonly TerminationReason Timeout = new("timeout");

    public static readonly TerminationReason InsufficientFunds = new("insufficient_funds");

    public TResult Match<TResult>(Func<TResult> onLowMatchRate,
        Func<TResult> onMatchLimitMet,
        Func<TResult> onCandidatesExhausted,
        Func<TResult> onUserCancelled,
        Func<TResult> onErrorOccurred,
        Func<TResult> onTimeout,
        Func<TResult> onInsufficientFunds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LowMatchRate => onLowMatchRate(),
            _ when this == MatchLimitMet => onMatchLimitMet(),
            _ when this == CandidatesExhausted => onCandidatesExhausted(),
            _ when this == UserCancelled => onUserCancelled(),
            _ when this == ErrorOccurred => onErrorOccurred(),
            _ when this == Timeout => onTimeout(),
            _ when this == InsufficientFunds => onInsufficientFunds(),
            _ => otherwise(Value)
        };

    public void Match(Action onLowMatchRate,
        Action onMatchLimitMet,
        Action onCandidatesExhausted,
        Action onUserCancelled,
        Action onErrorOccurred,
        Action onTimeout,
        Action onInsufficientFunds,
        Action<string> otherwise)
    {
        if (this == LowMatchRate) onLowMatchRate();
        else if (this == MatchLimitMet) onMatchLimitMet();
        else if (this == CandidatesExhausted) onCandidatesExhausted();
        else if (this == UserCancelled) onUserCancelled();
        else if (this == ErrorOccurred) onErrorOccurred();
        else if (this == Timeout) onTimeout();
        else if (this == InsufficientFunds) onInsufficientFunds();
        else otherwise(Value);
    }
}
