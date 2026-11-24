using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Type of article content
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentType>))]
public sealed record ContentType : OpenStringEnum<ContentType>
{
    private ContentType(string value) : base(value)
    {
    }

    public static readonly ContentType News = new("news");

    public static readonly ContentType Analysis = new("analysis");

    public static readonly ContentType PressRelease = new("press_release");

    public static readonly ContentType MarketCommentary = new("market_commentary");

    public static readonly ContentType MarketNews = new("market_news");

    public static readonly ContentType TradingHalt = new("trading_halt");

    public static readonly ContentType TradingEvent = new("trading_event");

    public static readonly ContentType Other = new("other");

    public TResult Match<TResult>(Func<TResult> onNews,
        Func<TResult> onAnalysis,
        Func<TResult> onPressRelease,
        Func<TResult> onMarketCommentary,
        Func<TResult> onMarketNews,
        Func<TResult> onTradingHalt,
        Func<TResult> onTradingEvent,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == News => onNews(),
            _ when this == Analysis => onAnalysis(),
            _ when this == PressRelease => onPressRelease(),
            _ when this == MarketCommentary => onMarketCommentary(),
            _ when this == MarketNews => onMarketNews(),
            _ when this == TradingHalt => onTradingHalt(),
            _ when this == TradingEvent => onTradingEvent(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onNews,
        Action onAnalysis,
        Action onPressRelease,
        Action onMarketCommentary,
        Action onMarketNews,
        Action onTradingHalt,
        Action onTradingEvent,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == News) onNews();
        else if (this == Analysis) onAnalysis();
        else if (this == PressRelease) onPressRelease();
        else if (this == MarketCommentary) onMarketCommentary();
        else if (this == MarketNews) onMarketNews();
        else if (this == TradingHalt) onTradingHalt();
        else if (this == TradingEvent) onTradingEvent();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
