using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByPerigonWikipediaApi>))]
public sealed record SortByPerigonWikipediaApi : OpenStringEnum<SortByPerigonWikipediaApi>
{
    private SortByPerigonWikipediaApi(string value) : base(value)
    {
    }

    public static readonly SortByPerigonWikipediaApi Relevance = new("relevance");

    public static readonly SortByPerigonWikipediaApi RevisionTsDesc = new("revisionTsDesc");

    public static readonly SortByPerigonWikipediaApi RevisionTsAsc = new("revisionTsAsc");

    public static readonly SortByPerigonWikipediaApi PageViewsDesc = new("pageViewsDesc");

    public static readonly SortByPerigonWikipediaApi PageViewsAsc = new("pageViewsAsc");

    public static readonly SortByPerigonWikipediaApi ScrapedAtDesc = new("scrapedAtDesc");

    public static readonly SortByPerigonWikipediaApi ScrapedAtAsc = new("scrapedAtAsc");

    public TResult Match<TResult>(Func<TResult> onRelevance,
        Func<TResult> onRevisionTsDesc,
        Func<TResult> onRevisionTsAsc,
        Func<TResult> onPageViewsDesc,
        Func<TResult> onPageViewsAsc,
        Func<TResult> onScrapedAtDesc,
        Func<TResult> onScrapedAtAsc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relevance => onRelevance(),
            _ when this == RevisionTsDesc => onRevisionTsDesc(),
            _ when this == RevisionTsAsc => onRevisionTsAsc(),
            _ when this == PageViewsDesc => onPageViewsDesc(),
            _ when this == PageViewsAsc => onPageViewsAsc(),
            _ when this == ScrapedAtDesc => onScrapedAtDesc(),
            _ when this == ScrapedAtAsc => onScrapedAtAsc(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevance,
        Action onRevisionTsDesc,
        Action onRevisionTsAsc,
        Action onPageViewsDesc,
        Action onPageViewsAsc,
        Action onScrapedAtDesc,
        Action onScrapedAtAsc,
        Action<string> otherwise)
    {
        if (this == Relevance) onRelevance();
        else if (this == RevisionTsDesc) onRevisionTsDesc();
        else if (this == RevisionTsAsc) onRevisionTsAsc();
        else if (this == PageViewsDesc) onPageViewsDesc();
        else if (this == PageViewsAsc) onPageViewsAsc();
        else if (this == ScrapedAtDesc) onScrapedAtDesc();
        else if (this == ScrapedAtAsc) onScrapedAtAsc();
        else otherwise(Value);
    }
}
