using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Whether or not the page blocks indexing through a noindex rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IndexingState1>))]
public sealed record IndexingState1 : OpenStringEnum<IndexingState1>
{
    private IndexingState1(string value) : base(value)
    {
    }

    public static readonly IndexingState1 AmpIndexingStateUnspecified = new("AMP_INDEXING_STATE_UNSPECIFIED");

    public static readonly IndexingState1 AmpIndexingAllowed = new("AMP_INDEXING_ALLOWED");

    public static readonly IndexingState1 BlockedDueToNoindex = new("BLOCKED_DUE_TO_NOINDEX");

    public static readonly IndexingState1 BlockedDueToExpiredUnavailableAfter = new(
        "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER");

    public TResult Match<TResult>(Func<TResult> onAmpIndexingStateUnspecified,
        Func<TResult> onAmpIndexingAllowed,
        Func<TResult> onBlockedDueToNoindex,
        Func<TResult> onBlockedDueToExpiredUnavailableAfter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmpIndexingStateUnspecified => onAmpIndexingStateUnspecified(),
            _ when this == AmpIndexingAllowed => onAmpIndexingAllowed(),
            _ when this == BlockedDueToNoindex => onBlockedDueToNoindex(),
            _ when this == BlockedDueToExpiredUnavailableAfter => onBlockedDueToExpiredUnavailableAfter(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmpIndexingStateUnspecified,
        Action onAmpIndexingAllowed,
        Action onBlockedDueToNoindex,
        Action onBlockedDueToExpiredUnavailableAfter,
        Action<string> otherwise)
    {
        if (this == AmpIndexingStateUnspecified) onAmpIndexingStateUnspecified();
        else if (this == AmpIndexingAllowed) onAmpIndexingAllowed();
        else if (this == BlockedDueToNoindex) onBlockedDueToNoindex();
        else if (this == BlockedDueToExpiredUnavailableAfter) onBlockedDueToExpiredUnavailableAfter();
        else otherwise(Value);
    }
}
