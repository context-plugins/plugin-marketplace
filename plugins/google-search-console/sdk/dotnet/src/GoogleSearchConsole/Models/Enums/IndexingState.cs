using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Whether or not the page blocks indexing through a noindex rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IndexingState>))]
public sealed record IndexingState : OpenStringEnum<IndexingState>
{
    private IndexingState(string value) : base(value)
    {
    }

    public static readonly IndexingState IndexingStateUnspecified = new("INDEXING_STATE_UNSPECIFIED");

    public static readonly IndexingState IndexingAllowed = new("INDEXING_ALLOWED");

    public static readonly IndexingState BlockedByMetaTag = new("BLOCKED_BY_META_TAG");

    public static readonly IndexingState BlockedByHttpHeader = new("BLOCKED_BY_HTTP_HEADER");

    public static readonly IndexingState BlockedByRobotsTxt = new("BLOCKED_BY_ROBOTS_TXT");

    public TResult Match<TResult>(Func<TResult> onIndexingStateUnspecified,
        Func<TResult> onIndexingAllowed,
        Func<TResult> onBlockedByMetaTag,
        Func<TResult> onBlockedByHttpHeader,
        Func<TResult> onBlockedByRobotsTxt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IndexingStateUnspecified => onIndexingStateUnspecified(),
            _ when this == IndexingAllowed => onIndexingAllowed(),
            _ when this == BlockedByMetaTag => onBlockedByMetaTag(),
            _ when this == BlockedByHttpHeader => onBlockedByHttpHeader(),
            _ when this == BlockedByRobotsTxt => onBlockedByRobotsTxt(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndexingStateUnspecified,
        Action onIndexingAllowed,
        Action onBlockedByMetaTag,
        Action onBlockedByHttpHeader,
        Action onBlockedByRobotsTxt,
        Action<string> otherwise)
    {
        if (this == IndexingStateUnspecified) onIndexingStateUnspecified();
        else if (this == IndexingAllowed) onIndexingAllowed();
        else if (this == BlockedByMetaTag) onBlockedByMetaTag();
        else if (this == BlockedByHttpHeader) onBlockedByHttpHeader();
        else if (this == BlockedByRobotsTxt) onBlockedByRobotsTxt();
        else otherwise(Value);
    }
}
