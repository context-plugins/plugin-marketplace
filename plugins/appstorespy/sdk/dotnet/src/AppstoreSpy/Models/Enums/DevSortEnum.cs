using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DevSortEnum>))]
public sealed record DevSortEnum : OpenStringEnum<DevSortEnum>
{
    private DevSortEnum(string value) : base(value)
    {
    }

    public static readonly DevSortEnum Revenue = new("revenue");

    public static readonly DevSortEnum Revenue2 = new("-revenue");

    public static readonly DevSortEnum Downloads = new("downloads");

    public static readonly DevSortEnum Downloads2 = new("-downloads");

    public static readonly DevSortEnum TotalApps = new("total_apps");

    public static readonly DevSortEnum TotalApps2 = new("-total_apps");

    public static readonly DevSortEnum PublishedApps = new("published_apps");

    public static readonly DevSortEnum PublishedApps2 = new("-published_apps");

    public static readonly DevSortEnum RatingCount = new("rating_count");

    public static readonly DevSortEnum RatingCount2 = new("-rating_count");

    public static readonly DevSortEnum FirstReleased = new("first_released");

    public static readonly DevSortEnum FirstReleased2 = new("-first_released");

    public static readonly DevSortEnum LastUpdated = new("last_updated");

    public static readonly DevSortEnum LastUpdated2 = new("-last_updated");

    public TResult Match<TResult>(Func<TResult> onRevenue,
        Func<TResult> onRevenue2,
        Func<TResult> onDownloads,
        Func<TResult> onDownloads2,
        Func<TResult> onTotalApps,
        Func<TResult> onTotalApps2,
        Func<TResult> onPublishedApps,
        Func<TResult> onPublishedApps2,
        Func<TResult> onRatingCount,
        Func<TResult> onRatingCount2,
        Func<TResult> onFirstReleased,
        Func<TResult> onFirstReleased2,
        Func<TResult> onLastUpdated,
        Func<TResult> onLastUpdated2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Revenue => onRevenue(),
            _ when this == Revenue2 => onRevenue2(),
            _ when this == Downloads => onDownloads(),
            _ when this == Downloads2 => onDownloads2(),
            _ when this == TotalApps => onTotalApps(),
            _ when this == TotalApps2 => onTotalApps2(),
            _ when this == PublishedApps => onPublishedApps(),
            _ when this == PublishedApps2 => onPublishedApps2(),
            _ when this == RatingCount => onRatingCount(),
            _ when this == RatingCount2 => onRatingCount2(),
            _ when this == FirstReleased => onFirstReleased(),
            _ when this == FirstReleased2 => onFirstReleased2(),
            _ when this == LastUpdated => onLastUpdated(),
            _ when this == LastUpdated2 => onLastUpdated2(),
            _ => otherwise(Value)
        };

    public void Match(Action onRevenue,
        Action onRevenue2,
        Action onDownloads,
        Action onDownloads2,
        Action onTotalApps,
        Action onTotalApps2,
        Action onPublishedApps,
        Action onPublishedApps2,
        Action onRatingCount,
        Action onRatingCount2,
        Action onFirstReleased,
        Action onFirstReleased2,
        Action onLastUpdated,
        Action onLastUpdated2,
        Action<string> otherwise)
    {
        if (this == Revenue) onRevenue();
        else if (this == Revenue2) onRevenue2();
        else if (this == Downloads) onDownloads();
        else if (this == Downloads2) onDownloads2();
        else if (this == TotalApps) onTotalApps();
        else if (this == TotalApps2) onTotalApps2();
        else if (this == PublishedApps) onPublishedApps();
        else if (this == PublishedApps2) onPublishedApps2();
        else if (this == RatingCount) onRatingCount();
        else if (this == RatingCount2) onRatingCount2();
        else if (this == FirstReleased) onFirstReleased();
        else if (this == FirstReleased2) onFirstReleased2();
        else if (this == LastUpdated) onLastUpdated();
        else if (this == LastUpdated2) onLastUpdated2();
        else otherwise(Value);
    }
}
