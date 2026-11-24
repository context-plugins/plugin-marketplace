using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The match type for this filter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchType>))]
public sealed record MatchType : OpenStringEnum<MatchType>
{
    private MatchType(string value) : base(value)
    {
    }

    public static readonly MatchType MatchTypeUnspecified = new("MATCH_TYPE_UNSPECIFIED");

    public static readonly MatchType Exact = new("EXACT");

    public static readonly MatchType BeginsWith = new("BEGINS_WITH");

    public static readonly MatchType EndsWith = new("ENDS_WITH");

    public static readonly MatchType Contains = new("CONTAINS");

    public static readonly MatchType FullRegexp = new("FULL_REGEXP");

    public static readonly MatchType PartialRegexp = new("PARTIAL_REGEXP");

    public TResult Match<TResult>(Func<TResult> onMatchTypeUnspecified,
        Func<TResult> onExact,
        Func<TResult> onBeginsWith,
        Func<TResult> onEndsWith,
        Func<TResult> onContains,
        Func<TResult> onFullRegexp,
        Func<TResult> onPartialRegexp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MatchTypeUnspecified => onMatchTypeUnspecified(),
            _ when this == Exact => onExact(),
            _ when this == BeginsWith => onBeginsWith(),
            _ when this == EndsWith => onEndsWith(),
            _ when this == Contains => onContains(),
            _ when this == FullRegexp => onFullRegexp(),
            _ when this == PartialRegexp => onPartialRegexp(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatchTypeUnspecified,
        Action onExact,
        Action onBeginsWith,
        Action onEndsWith,
        Action onContains,
        Action onFullRegexp,
        Action onPartialRegexp,
        Action<string> otherwise)
    {
        if (this == MatchTypeUnspecified) onMatchTypeUnspecified();
        else if (this == Exact) onExact();
        else if (this == BeginsWith) onBeginsWith();
        else if (this == EndsWith) onEndsWith();
        else if (this == Contains) onContains();
        else if (this == FullRegexp) onFullRegexp();
        else if (this == PartialRegexp) onPartialRegexp();
        else otherwise(Value);
    }
}
