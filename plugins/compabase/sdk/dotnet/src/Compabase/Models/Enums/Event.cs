using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

/// <summary>
/// Event type (also sent in the <c>X-Compabase-Event</c> header).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event WatchlistCompanyChanged = new("watchlist.company_changed");

    public static readonly Event WatchlistBoardChanged = new("watchlist.board_changed");

    public static readonly Event WatchlistOwnershipChanged = new("watchlist.ownership_changed");

    public static readonly Event WatchlistStatusChanged = new("watchlist.status_changed");

    public static readonly Event WatchlistCompanyRemovedFromRegistry = new("watchlist.company_removed_from_registry");

    public static readonly Event WatchlistFinancialsUpdated = new("watchlist.financials_updated");

    public static readonly Event WatchlistFilingOverdue = new("watchlist.filing_overdue");

    public static readonly Event WatchlistInsolvency = new("watchlist.insolvency");

    public static readonly Event WatchlistCourtGazette = new("watchlist.court_gazette");

    public static readonly Event WatchlistSecuredLiabilities = new("watchlist.secured_liabilities");

    public static readonly Event WatchlistSanctions = new("watchlist.sanctions");

    public static readonly Event WatchlistPublicTenders = new("watchlist.public_tenders");

    public static readonly Event WatchlistPublicAid = new("watchlist.public_aid");

    public static readonly Event WatchlistLicenses = new("watchlist.licenses");

    public static readonly Event WatchlistNfz = new("watchlist.nfz");

    public static readonly Event WatchlistTrademarks = new("watchlist.trademarks");

    public static readonly Event WatchlistJobOffers = new("watchlist.job_offers");

    public static readonly Event WatchlistContactChanged = new("watchlist.contact_changed");

    public static readonly Event WatchlistCompanyNews = new("watchlist.company_news");

    public TResult Match<TResult>(Func<TResult> onWatchlistCompanyChanged,
        Func<TResult> onWatchlistBoardChanged,
        Func<TResult> onWatchlistOwnershipChanged,
        Func<TResult> onWatchlistStatusChanged,
        Func<TResult> onWatchlistCompanyRemovedFromRegistry,
        Func<TResult> onWatchlistFinancialsUpdated,
        Func<TResult> onWatchlistFilingOverdue,
        Func<TResult> onWatchlistInsolvency,
        Func<TResult> onWatchlistCourtGazette,
        Func<TResult> onWatchlistSecuredLiabilities,
        Func<TResult> onWatchlistSanctions,
        Func<TResult> onWatchlistPublicTenders,
        Func<TResult> onWatchlistPublicAid,
        Func<TResult> onWatchlistLicenses,
        Func<TResult> onWatchlistNfz,
        Func<TResult> onWatchlistTrademarks,
        Func<TResult> onWatchlistJobOffers,
        Func<TResult> onWatchlistContactChanged,
        Func<TResult> onWatchlistCompanyNews,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WatchlistCompanyChanged => onWatchlistCompanyChanged(),
            _ when this == WatchlistBoardChanged => onWatchlistBoardChanged(),
            _ when this == WatchlistOwnershipChanged => onWatchlistOwnershipChanged(),
            _ when this == WatchlistStatusChanged => onWatchlistStatusChanged(),
            _ when this == WatchlistCompanyRemovedFromRegistry => onWatchlistCompanyRemovedFromRegistry(),
            _ when this == WatchlistFinancialsUpdated => onWatchlistFinancialsUpdated(),
            _ when this == WatchlistFilingOverdue => onWatchlistFilingOverdue(),
            _ when this == WatchlistInsolvency => onWatchlistInsolvency(),
            _ when this == WatchlistCourtGazette => onWatchlistCourtGazette(),
            _ when this == WatchlistSecuredLiabilities => onWatchlistSecuredLiabilities(),
            _ when this == WatchlistSanctions => onWatchlistSanctions(),
            _ when this == WatchlistPublicTenders => onWatchlistPublicTenders(),
            _ when this == WatchlistPublicAid => onWatchlistPublicAid(),
            _ when this == WatchlistLicenses => onWatchlistLicenses(),
            _ when this == WatchlistNfz => onWatchlistNfz(),
            _ when this == WatchlistTrademarks => onWatchlistTrademarks(),
            _ when this == WatchlistJobOffers => onWatchlistJobOffers(),
            _ when this == WatchlistContactChanged => onWatchlistContactChanged(),
            _ when this == WatchlistCompanyNews => onWatchlistCompanyNews(),
            _ => otherwise(Value)
        };

    public void Match(Action onWatchlistCompanyChanged,
        Action onWatchlistBoardChanged,
        Action onWatchlistOwnershipChanged,
        Action onWatchlistStatusChanged,
        Action onWatchlistCompanyRemovedFromRegistry,
        Action onWatchlistFinancialsUpdated,
        Action onWatchlistFilingOverdue,
        Action onWatchlistInsolvency,
        Action onWatchlistCourtGazette,
        Action onWatchlistSecuredLiabilities,
        Action onWatchlistSanctions,
        Action onWatchlistPublicTenders,
        Action onWatchlistPublicAid,
        Action onWatchlistLicenses,
        Action onWatchlistNfz,
        Action onWatchlistTrademarks,
        Action onWatchlistJobOffers,
        Action onWatchlistContactChanged,
        Action onWatchlistCompanyNews,
        Action<string> otherwise)
    {
        if (this == WatchlistCompanyChanged) onWatchlistCompanyChanged();
        else if (this == WatchlistBoardChanged) onWatchlistBoardChanged();
        else if (this == WatchlistOwnershipChanged) onWatchlistOwnershipChanged();
        else if (this == WatchlistStatusChanged) onWatchlistStatusChanged();
        else if (this == WatchlistCompanyRemovedFromRegistry) onWatchlistCompanyRemovedFromRegistry();
        else if (this == WatchlistFinancialsUpdated) onWatchlistFinancialsUpdated();
        else if (this == WatchlistFilingOverdue) onWatchlistFilingOverdue();
        else if (this == WatchlistInsolvency) onWatchlistInsolvency();
        else if (this == WatchlistCourtGazette) onWatchlistCourtGazette();
        else if (this == WatchlistSecuredLiabilities) onWatchlistSecuredLiabilities();
        else if (this == WatchlistSanctions) onWatchlistSanctions();
        else if (this == WatchlistPublicTenders) onWatchlistPublicTenders();
        else if (this == WatchlistPublicAid) onWatchlistPublicAid();
        else if (this == WatchlistLicenses) onWatchlistLicenses();
        else if (this == WatchlistNfz) onWatchlistNfz();
        else if (this == WatchlistTrademarks) onWatchlistTrademarks();
        else if (this == WatchlistJobOffers) onWatchlistJobOffers();
        else if (this == WatchlistContactChanged) onWatchlistContactChanged();
        else if (this == WatchlistCompanyNews) onWatchlistCompanyNews();
        else otherwise(Value);
    }
}
