using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventType1>))]
public sealed record EventType1 : OpenStringEnum<EventType1>
{
    private EventType1(string value) : base(value)
    {
    }

    public static readonly EventType1 EarningsReport = new("earnings_report");

    public static readonly EventType1 EarningsCall = new("earnings_call");

    public static readonly EventType1 Agm = new("agm");

    public static readonly EventType1 Egm = new("egm");

    public static readonly EventType1 Dividend = new("dividend");

    public static readonly EventType1 CapitalMarketsDay = new("capital_markets_day");

    public static readonly EventType1 TradingUpdate = new("trading_update");

    public static readonly EventType1 ConferencePresentation = new("conference_presentation");

    public static readonly EventType1 MaAnnouncement = new("ma_announcement");

    public static readonly EventType1 MaOfferDeadline = new("ma_offer_deadline");

    public static readonly EventType1 MaCompletion = new("ma_completion");

    public static readonly EventType1 Listing = new("listing");

    public static readonly EventType1 Delisting = new("delisting");

    public TResult Match<TResult>(Func<TResult> onEarningsReport,
        Func<TResult> onEarningsCall,
        Func<TResult> onAgm,
        Func<TResult> onEgm,
        Func<TResult> onDividend,
        Func<TResult> onCapitalMarketsDay,
        Func<TResult> onTradingUpdate,
        Func<TResult> onConferencePresentation,
        Func<TResult> onMaAnnouncement,
        Func<TResult> onMaOfferDeadline,
        Func<TResult> onMaCompletion,
        Func<TResult> onListing,
        Func<TResult> onDelisting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EarningsReport => onEarningsReport(),
            _ when this == EarningsCall => onEarningsCall(),
            _ when this == Agm => onAgm(),
            _ when this == Egm => onEgm(),
            _ when this == Dividend => onDividend(),
            _ when this == CapitalMarketsDay => onCapitalMarketsDay(),
            _ when this == TradingUpdate => onTradingUpdate(),
            _ when this == ConferencePresentation => onConferencePresentation(),
            _ when this == MaAnnouncement => onMaAnnouncement(),
            _ when this == MaOfferDeadline => onMaOfferDeadline(),
            _ when this == MaCompletion => onMaCompletion(),
            _ when this == Listing => onListing(),
            _ when this == Delisting => onDelisting(),
            _ => otherwise(Value)
        };

    public void Match(Action onEarningsReport,
        Action onEarningsCall,
        Action onAgm,
        Action onEgm,
        Action onDividend,
        Action onCapitalMarketsDay,
        Action onTradingUpdate,
        Action onConferencePresentation,
        Action onMaAnnouncement,
        Action onMaOfferDeadline,
        Action onMaCompletion,
        Action onListing,
        Action onDelisting,
        Action<string> otherwise)
    {
        if (this == EarningsReport) onEarningsReport();
        else if (this == EarningsCall) onEarningsCall();
        else if (this == Agm) onAgm();
        else if (this == Egm) onEgm();
        else if (this == Dividend) onDividend();
        else if (this == CapitalMarketsDay) onCapitalMarketsDay();
        else if (this == TradingUpdate) onTradingUpdate();
        else if (this == ConferencePresentation) onConferencePresentation();
        else if (this == MaAnnouncement) onMaAnnouncement();
        else if (this == MaOfferDeadline) onMaOfferDeadline();
        else if (this == MaCompletion) onMaCompletion();
        else if (this == Listing) onListing();
        else if (this == Delisting) onDelisting();
        else otherwise(Value);
    }
}
