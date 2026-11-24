using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Mode of a search. Defaults to SearchMode.JOB_SEARCH.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SearchMode>))]
public sealed record SearchMode : OpenStringEnum<SearchMode>
{
    private SearchMode(string value) : base(value)
    {
    }

    public static readonly SearchMode SearchModeUnspecified = new("SEARCH_MODE_UNSPECIFIED");

    public static readonly SearchMode JobSearch = new("JOB_SEARCH");

    public static readonly SearchMode FeaturedJobSearch = new("FEATURED_JOB_SEARCH");

    public TResult Match<TResult>(Func<TResult> onSearchModeUnspecified,
        Func<TResult> onJobSearch,
        Func<TResult> onFeaturedJobSearch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SearchModeUnspecified => onSearchModeUnspecified(),
            _ when this == JobSearch => onJobSearch(),
            _ when this == FeaturedJobSearch => onFeaturedJobSearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearchModeUnspecified,
        Action onJobSearch,
        Action onFeaturedJobSearch,
        Action<string> otherwise)
    {
        if (this == SearchModeUnspecified) onSearchModeUnspecified();
        else if (this == JobSearch) onJobSearch();
        else if (this == FeaturedJobSearch) onFeaturedJobSearch();
        else otherwise(Value);
    }
}
