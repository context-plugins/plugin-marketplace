using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Exchange of the trading symbol
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExchangeOpenApiDefinitionPortfolioApi>))]
public sealed record ExchangeOpenApiDefinitionPortfolioApi : OpenStringEnum<ExchangeOpenApiDefinitionPortfolioApi>
{
    private ExchangeOpenApiDefinitionPortfolioApi(string value) : base(value)
    {
    }

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Nse = new("NSE");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Nfo = new("NFO");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Cds = new("CDS");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Bse = new("BSE");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Bfo = new("BFO");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Bcd = new("BCD");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Mcx = new("MCX");

    public static readonly ExchangeOpenApiDefinitionPortfolioApi Nscom = new("NSCOM");

    public TResult Match<TResult>(Func<TResult> onNse,
        Func<TResult> onNfo,
        Func<TResult> onCds,
        Func<TResult> onBse,
        Func<TResult> onBfo,
        Func<TResult> onBcd,
        Func<TResult> onMcx,
        Func<TResult> onNscom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Nse => onNse(),
            _ when this == Nfo => onNfo(),
            _ when this == Cds => onCds(),
            _ when this == Bse => onBse(),
            _ when this == Bfo => onBfo(),
            _ when this == Bcd => onBcd(),
            _ when this == Mcx => onMcx(),
            _ when this == Nscom => onNscom(),
            _ => otherwise(Value)
        };

    public void Match(Action onNse,
        Action onNfo,
        Action onCds,
        Action onBse,
        Action onBfo,
        Action onBcd,
        Action onMcx,
        Action onNscom,
        Action<string> otherwise)
    {
        if (this == Nse) onNse();
        else if (this == Nfo) onNfo();
        else if (this == Cds) onCds();
        else if (this == Bse) onBse();
        else if (this == Bfo) onBfo();
        else if (this == Bcd) onBcd();
        else if (this == Mcx) onMcx();
        else if (this == Nscom) onNscom();
        else otherwise(Value);
    }
}
