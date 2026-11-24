using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IosSortEnum>))]
public sealed record IosSortEnum : OpenStringEnum<IosSortEnum>
{
    private IosSortEnum(string value) : base(value)
    {
    }

    public static readonly IosSortEnum RevenueMonth = new("revenue_month");

    public static readonly IosSortEnum RevenueMonth2 = new("-revenue_month");

    public static readonly IosSortEnum DownloadsMonth = new("downloads_month");

    public static readonly IosSortEnum DownloadsMonth2 = new("-downloads_month");

    public static readonly IosSortEnum UpdateDate = new("update_date");

    public static readonly IosSortEnum UpdateDate2 = new("-update_date");

    public static readonly IosSortEnum ReleaseDate = new("release_date");

    public static readonly IosSortEnum ReleaseDate2 = new("-release_date");

    public static readonly IosSortEnum RemovalDate = new("removal_date");

    public static readonly IosSortEnum RemovalDate2 = new("-removal_date");

    public static readonly IosSortEnum DownloadsExact = new("downloads_exact");

    public static readonly IosSortEnum DownloadsExact2 = new("-downloads_exact");

    public static readonly IosSortEnum DownloadsMark = new("downloads_mark");

    public static readonly IosSortEnum DownloadsMark2 = new("-downloads_mark");

    public static readonly IosSortEnum RatingCount = new("rating_count");

    public static readonly IosSortEnum RatingCount2 = new("-rating_count");

    public static readonly IosSortEnum RatingValue = new("rating_value");

    public static readonly IosSortEnum RatingValue2 = new("-rating_value");

    public static readonly IosSortEnum ReviewCount = new("review_count");

    public static readonly IosSortEnum ReviewCount2 = new("-review_count");

    public static readonly IosSortEnum RatingAvg = new("rating_avg");

    public static readonly IosSortEnum RatingAvg2 = new("-rating_avg");

    public static readonly IosSortEnum ChartInfo = new("chart_info");

    public static readonly IosSortEnum ChartInfo2 = new("-chart_info");

    public TResult Match<TResult>(Func<TResult> onRevenueMonth,
        Func<TResult> onRevenueMonth2,
        Func<TResult> onDownloadsMonth,
        Func<TResult> onDownloadsMonth2,
        Func<TResult> onUpdateDate,
        Func<TResult> onUpdateDate2,
        Func<TResult> onReleaseDate,
        Func<TResult> onReleaseDate2,
        Func<TResult> onRemovalDate,
        Func<TResult> onRemovalDate2,
        Func<TResult> onDownloadsExact,
        Func<TResult> onDownloadsExact2,
        Func<TResult> onDownloadsMark,
        Func<TResult> onDownloadsMark2,
        Func<TResult> onRatingCount,
        Func<TResult> onRatingCount2,
        Func<TResult> onRatingValue,
        Func<TResult> onRatingValue2,
        Func<TResult> onReviewCount,
        Func<TResult> onReviewCount2,
        Func<TResult> onRatingAvg,
        Func<TResult> onRatingAvg2,
        Func<TResult> onChartInfo,
        Func<TResult> onChartInfo2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RevenueMonth => onRevenueMonth(),
            _ when this == RevenueMonth2 => onRevenueMonth2(),
            _ when this == DownloadsMonth => onDownloadsMonth(),
            _ when this == DownloadsMonth2 => onDownloadsMonth2(),
            _ when this == UpdateDate => onUpdateDate(),
            _ when this == UpdateDate2 => onUpdateDate2(),
            _ when this == ReleaseDate => onReleaseDate(),
            _ when this == ReleaseDate2 => onReleaseDate2(),
            _ when this == RemovalDate => onRemovalDate(),
            _ when this == RemovalDate2 => onRemovalDate2(),
            _ when this == DownloadsExact => onDownloadsExact(),
            _ when this == DownloadsExact2 => onDownloadsExact2(),
            _ when this == DownloadsMark => onDownloadsMark(),
            _ when this == DownloadsMark2 => onDownloadsMark2(),
            _ when this == RatingCount => onRatingCount(),
            _ when this == RatingCount2 => onRatingCount2(),
            _ when this == RatingValue => onRatingValue(),
            _ when this == RatingValue2 => onRatingValue2(),
            _ when this == ReviewCount => onReviewCount(),
            _ when this == ReviewCount2 => onReviewCount2(),
            _ when this == RatingAvg => onRatingAvg(),
            _ when this == RatingAvg2 => onRatingAvg2(),
            _ when this == ChartInfo => onChartInfo(),
            _ when this == ChartInfo2 => onChartInfo2(),
            _ => otherwise(Value)
        };

    public void Match(Action onRevenueMonth,
        Action onRevenueMonth2,
        Action onDownloadsMonth,
        Action onDownloadsMonth2,
        Action onUpdateDate,
        Action onUpdateDate2,
        Action onReleaseDate,
        Action onReleaseDate2,
        Action onRemovalDate,
        Action onRemovalDate2,
        Action onDownloadsExact,
        Action onDownloadsExact2,
        Action onDownloadsMark,
        Action onDownloadsMark2,
        Action onRatingCount,
        Action onRatingCount2,
        Action onRatingValue,
        Action onRatingValue2,
        Action onReviewCount,
        Action onReviewCount2,
        Action onRatingAvg,
        Action onRatingAvg2,
        Action onChartInfo,
        Action onChartInfo2,
        Action<string> otherwise)
    {
        if (this == RevenueMonth) onRevenueMonth();
        else if (this == RevenueMonth2) onRevenueMonth2();
        else if (this == DownloadsMonth) onDownloadsMonth();
        else if (this == DownloadsMonth2) onDownloadsMonth2();
        else if (this == UpdateDate) onUpdateDate();
        else if (this == UpdateDate2) onUpdateDate2();
        else if (this == ReleaseDate) onReleaseDate();
        else if (this == ReleaseDate2) onReleaseDate2();
        else if (this == RemovalDate) onRemovalDate();
        else if (this == RemovalDate2) onRemovalDate2();
        else if (this == DownloadsExact) onDownloadsExact();
        else if (this == DownloadsExact2) onDownloadsExact2();
        else if (this == DownloadsMark) onDownloadsMark();
        else if (this == DownloadsMark2) onDownloadsMark2();
        else if (this == RatingCount) onRatingCount();
        else if (this == RatingCount2) onRatingCount2();
        else if (this == RatingValue) onRatingValue();
        else if (this == RatingValue2) onRatingValue2();
        else if (this == ReviewCount) onReviewCount();
        else if (this == ReviewCount2) onReviewCount2();
        else if (this == RatingAvg) onRatingAvg();
        else if (this == RatingAvg2) onRatingAvg2();
        else if (this == ChartInfo) onChartInfo();
        else if (this == ChartInfo2) onChartInfo2();
        else otherwise(Value);
    }
}
