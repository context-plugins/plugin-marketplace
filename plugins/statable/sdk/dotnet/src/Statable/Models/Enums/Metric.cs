using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

/// <summary>
/// <c>visits</c> = sessions. <c>visit_duration</c> in seconds. <c>bounce_rate</c> is a 0–100 percentage. <c>views_per_visit</c> = pageviews/visits (2 decimals). <c>engagement_time</c> = avg active-engagement seconds (aggregate + time-series, distinct from visit_duration). <c>events</c> = raw event count (breakdowns event:name/props/goal). <c>conversion_rate</c> = converters percent (event:goal). <c>time_on_page</c>/<c>scroll_depth</c> = avg seconds / avg max scroll% 0-100 (event:page, event:folder). <c>exit_rate</c> = exits percent of pageviews (visit:exit_page). The last five are breakdown-only: off their dimension, and on an aggregate or a time series, they return <c>metric_not_available</c> naming the shape and the dimensions that do compute them. <c>unknown_metric</c> means the name itself is not a metric we compute.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Metric>))]
public sealed record Metric : OpenStringEnum<Metric>
{
    private Metric(string value) : base(value)
    {
    }

    public static readonly Metric Visitors = new("visitors");

    public static readonly Metric Pageviews = new("pageviews");

    public static readonly Metric Visits = new("visits");

    public static readonly Metric VisitDuration = new("visit_duration");

    public static readonly Metric BounceRate = new("bounce_rate");

    public static readonly Metric ViewsPerVisit = new("views_per_visit");

    public static readonly Metric EngagementTime = new("engagement_time");

    public static readonly Metric Events = new("events");

    public static readonly Metric ConversionRate = new("conversion_rate");

    public static readonly Metric TimeOnPage = new("time_on_page");

    public static readonly Metric ScrollDepth = new("scroll_depth");

    public static readonly Metric ExitRate = new("exit_rate");

    public TResult Match<TResult>(Func<TResult> onVisitors,
        Func<TResult> onPageviews,
        Func<TResult> onVisits,
        Func<TResult> onVisitDuration,
        Func<TResult> onBounceRate,
        Func<TResult> onViewsPerVisit,
        Func<TResult> onEngagementTime,
        Func<TResult> onEvents,
        Func<TResult> onConversionRate,
        Func<TResult> onTimeOnPage,
        Func<TResult> onScrollDepth,
        Func<TResult> onExitRate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Visitors => onVisitors(),
            _ when this == Pageviews => onPageviews(),
            _ when this == Visits => onVisits(),
            _ when this == VisitDuration => onVisitDuration(),
            _ when this == BounceRate => onBounceRate(),
            _ when this == ViewsPerVisit => onViewsPerVisit(),
            _ when this == EngagementTime => onEngagementTime(),
            _ when this == Events => onEvents(),
            _ when this == ConversionRate => onConversionRate(),
            _ when this == TimeOnPage => onTimeOnPage(),
            _ when this == ScrollDepth => onScrollDepth(),
            _ when this == ExitRate => onExitRate(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisitors,
        Action onPageviews,
        Action onVisits,
        Action onVisitDuration,
        Action onBounceRate,
        Action onViewsPerVisit,
        Action onEngagementTime,
        Action onEvents,
        Action onConversionRate,
        Action onTimeOnPage,
        Action onScrollDepth,
        Action onExitRate,
        Action<string> otherwise)
    {
        if (this == Visitors) onVisitors();
        else if (this == Pageviews) onPageviews();
        else if (this == Visits) onVisits();
        else if (this == VisitDuration) onVisitDuration();
        else if (this == BounceRate) onBounceRate();
        else if (this == ViewsPerVisit) onViewsPerVisit();
        else if (this == EngagementTime) onEngagementTime();
        else if (this == Events) onEvents();
        else if (this == ConversionRate) onConversionRate();
        else if (this == TimeOnPage) onTimeOnPage();
        else if (this == ScrollDepth) onScrollDepth();
        else if (this == ExitRate) onExitRate();
        else otherwise(Value);
    }
}
