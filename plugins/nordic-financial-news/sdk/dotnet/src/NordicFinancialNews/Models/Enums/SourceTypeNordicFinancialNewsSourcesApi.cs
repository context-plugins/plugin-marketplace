using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Source type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceTypeNordicFinancialNewsSourcesApi>))]
public sealed record SourceTypeNordicFinancialNewsSourcesApi : OpenStringEnum<SourceTypeNordicFinancialNewsSourcesApi>
{
    private SourceTypeNordicFinancialNewsSourcesApi(string value) : base(value)
    {
    }

    public static readonly SourceTypeNordicFinancialNewsSourcesApi NewsPublication = new("news_publication");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi WireService = new("wire_service");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi PressRelease = new("press_release");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi Government = new("government");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi TradePublication = new("trade_publication");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi Blog = new("blog");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi StockExchange = new("stock_exchange");

    public static readonly SourceTypeNordicFinancialNewsSourcesApi Research = new("research");

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
