using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceType>))]
public sealed record SourceType : OpenStringEnum<SourceType>
{
    private SourceType(string value) : base(value)
    {
    }

    public static readonly SourceType NewsPublication = new("news_publication");

    public static readonly SourceType WireService = new("wire_service");

    public static readonly SourceType PressRelease = new("press_release");

    public static readonly SourceType Government = new("government");

    public static readonly SourceType TradePublication = new("trade_publication");

    public static readonly SourceType Blog = new("blog");

    public static readonly SourceType StockExchange = new("stock_exchange");

    public static readonly SourceType Research = new("research");

    public TResult Match<TResult>(Func<TResult> onNewsPublication,
        Func<TResult> onWireService,
        Func<TResult> onPressRelease,
        Func<TResult> onGovernment,
        Func<TResult> onTradePublication,
        Func<TResult> onBlog,
        Func<TResult> onStockExchange,
        Func<TResult> onResearch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NewsPublication => onNewsPublication(),
            _ when this == WireService => onWireService(),
            _ when this == PressRelease => onPressRelease(),
            _ when this == Government => onGovernment(),
            _ when this == TradePublication => onTradePublication(),
            _ when this == Blog => onBlog(),
            _ when this == StockExchange => onStockExchange(),
            _ when this == Research => onResearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onNewsPublication,
        Action onWireService,
        Action onPressRelease,
        Action onGovernment,
        Action onTradePublication,
        Action onBlog,
        Action onStockExchange,
        Action onResearch,
        Action<string> otherwise)
    {
        if (this == NewsPublication) onNewsPublication();
        else if (this == WireService) onWireService();
        else if (this == PressRelease) onPressRelease();
        else if (this == Government) onGovernment();
        else if (this == TradePublication) onTradePublication();
        else if (this == Blog) onBlog();
        else if (this == StockExchange) onStockExchange();
        else if (this == Research) onResearch();
        else otherwise(Value);
    }
}
