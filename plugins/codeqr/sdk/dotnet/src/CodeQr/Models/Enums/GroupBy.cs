using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The parameter to group the analytics data points by. Defaults to 'count' if undefined.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GroupBy>))]
public sealed record GroupBy : OpenStringEnum<GroupBy>
{
    private GroupBy(string value) : base(value)
    {
    }

    public static readonly GroupBy Timeseries = new("timeseries");

    public static readonly GroupBy Clicks = new("clicks");

    public static readonly GroupBy Count = new("count");

    public static readonly GroupBy Totals = new("totals");

    public static readonly GroupBy TopUrls = new("top_urls");

    public static readonly GroupBy TopLinks = new("top_links");

    public static readonly GroupBy TopQrcodes = new("top_qrcodes");

    public static readonly GroupBy TopPages = new("top_pages");

    public static readonly GroupBy TopEvents = new("top_events");

    public static readonly GroupBy Scans = new("scans");

    public static readonly GroupBy Views = new("views");

    public static readonly GroupBy Country = new("country");

    public static readonly GroupBy City = new("city");

    public static readonly GroupBy Region = new("region");

    public static readonly GroupBy Devices = new("devices");

    public static readonly GroupBy Browsers = new("browsers");

    public static readonly GroupBy Os = new("os");

    public static readonly GroupBy Referers = new("referers");

    public static readonly GroupBy RefererUrls = new("referer_urls");

    public static readonly GroupBy TrendLive = new("trend_live");

    public static readonly GroupBy Kpis = new("kpis");

    public static readonly GroupBy Analytics = new("analytics");

    public static readonly GroupBy Continents = new("continents");

    public static readonly GroupBy Countries = new("countries");

    public static readonly GroupBy Cities = new("cities");

    public static readonly GroupBy Leads = new("leads");

    public static readonly GroupBy Sales = new("sales");

    public static readonly GroupBy Composite = new("composite");

    public static readonly GroupBy UtmSources = new("utm_sources");

    public static readonly GroupBy UtmMediums = new("utm_mediums");

    public static readonly GroupBy UtmCampaigns = new("utm_campaigns");

    public static readonly GroupBy UtmContents = new("utm_contents");

    public static readonly GroupBy UtmTerms = new("utm_terms");

    public TResult Match<TResult>(Func<TResult> onTimeseries,
        Func<TResult> onClicks,
        Func<TResult> onCount,
        Func<TResult> onTotals,
        Func<TResult> onTopUrls,
        Func<TResult> onTopLinks,
        Func<TResult> onTopQrcodes,
        Func<TResult> onTopPages,
        Func<TResult> onTopEvents,
        Func<TResult> onScans,
        Func<TResult> onViews,
        Func<TResult> onCountry,
        Func<TResult> onCity,
        Func<TResult> onRegion,
        Func<TResult> onDevices,
        Func<TResult> onBrowsers,
        Func<TResult> onOs,
        Func<TResult> onReferers,
        Func<TResult> onRefererUrls,
        Func<TResult> onTrendLive,
        Func<TResult> onKpis,
        Func<TResult> onAnalytics,
        Func<TResult> onContinents,
        Func<TResult> onCountries,
        Func<TResult> onCities,
        Func<TResult> onLeads,
        Func<TResult> onSales,
        Func<TResult> onComposite,
        Func<TResult> onUtmSources,
        Func<TResult> onUtmMediums,
        Func<TResult> onUtmCampaigns,
        Func<TResult> onUtmContents,
        Func<TResult> onUtmTerms,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Timeseries => onTimeseries(),
            _ when this == Clicks => onClicks(),
            _ when this == Count => onCount(),
            _ when this == Totals => onTotals(),
            _ when this == TopUrls => onTopUrls(),
            _ when this == TopLinks => onTopLinks(),
            _ when this == TopQrcodes => onTopQrcodes(),
            _ when this == TopPages => onTopPages(),
            _ when this == TopEvents => onTopEvents(),
            _ when this == Scans => onScans(),
            _ when this == Views => onViews(),
            _ when this == Country => onCountry(),
            _ when this == City => onCity(),
            _ when this == Region => onRegion(),
            _ when this == Devices => onDevices(),
            _ when this == Browsers => onBrowsers(),
            _ when this == Os => onOs(),
            _ when this == Referers => onReferers(),
            _ when this == RefererUrls => onRefererUrls(),
            _ when this == TrendLive => onTrendLive(),
            _ when this == Kpis => onKpis(),
            _ when this == Analytics => onAnalytics(),
            _ when this == Continents => onContinents(),
            _ when this == Countries => onCountries(),
            _ when this == Cities => onCities(),
            _ when this == Leads => onLeads(),
            _ when this == Sales => onSales(),
            _ when this == Composite => onComposite(),
            _ when this == UtmSources => onUtmSources(),
            _ when this == UtmMediums => onUtmMediums(),
            _ when this == UtmCampaigns => onUtmCampaigns(),
            _ when this == UtmContents => onUtmContents(),
            _ when this == UtmTerms => onUtmTerms(),
            _ => otherwise(Value)
        };

    public void Match(Action onTimeseries,
        Action onClicks,
        Action onCount,
        Action onTotals,
        Action onTopUrls,
        Action onTopLinks,
        Action onTopQrcodes,
        Action onTopPages,
        Action onTopEvents,
        Action onScans,
        Action onViews,
        Action onCountry,
        Action onCity,
        Action onRegion,
        Action onDevices,
        Action onBrowsers,
        Action onOs,
        Action onReferers,
        Action onRefererUrls,
        Action onTrendLive,
        Action onKpis,
        Action onAnalytics,
        Action onContinents,
        Action onCountries,
        Action onCities,
        Action onLeads,
        Action onSales,
        Action onComposite,
        Action onUtmSources,
        Action onUtmMediums,
        Action onUtmCampaigns,
        Action onUtmContents,
        Action onUtmTerms,
        Action<string> otherwise)
    {
        if (this == Timeseries) onTimeseries();
        else if (this == Clicks) onClicks();
        else if (this == Count) onCount();
        else if (this == Totals) onTotals();
        else if (this == TopUrls) onTopUrls();
        else if (this == TopLinks) onTopLinks();
        else if (this == TopQrcodes) onTopQrcodes();
        else if (this == TopPages) onTopPages();
        else if (this == TopEvents) onTopEvents();
        else if (this == Scans) onScans();
        else if (this == Views) onViews();
        else if (this == Country) onCountry();
        else if (this == City) onCity();
        else if (this == Region) onRegion();
        else if (this == Devices) onDevices();
        else if (this == Browsers) onBrowsers();
        else if (this == Os) onOs();
        else if (this == Referers) onReferers();
        else if (this == RefererUrls) onRefererUrls();
        else if (this == TrendLive) onTrendLive();
        else if (this == Kpis) onKpis();
        else if (this == Analytics) onAnalytics();
        else if (this == Continents) onContinents();
        else if (this == Countries) onCountries();
        else if (this == Cities) onCities();
        else if (this == Leads) onLeads();
        else if (this == Sales) onSales();
        else if (this == Composite) onComposite();
        else if (this == UtmSources) onUtmSources();
        else if (this == UtmMediums) onUtmMediums();
        else if (this == UtmCampaigns) onUtmCampaigns();
        else if (this == UtmContents) onUtmContents();
        else if (this == UtmTerms) onUtmTerms();
        else otherwise(Value);
    }
}
