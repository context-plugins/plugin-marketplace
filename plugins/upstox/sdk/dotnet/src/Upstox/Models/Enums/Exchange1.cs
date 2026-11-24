using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Exchange to which the order is associated
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Exchange1>))]
public sealed record Exchange1 : OpenStringEnum<Exchange1>
{
    private Exchange1(string value) : base(value)
    {
    }

    public static readonly Exchange1 Nse = new("NSE");

    public static readonly Exchange1 Nfo = new("NFO");

    public static readonly Exchange1 Cds = new("CDS");

    public static readonly Exchange1 Bse = new("BSE");

    public static readonly Exchange1 Bfo = new("BFO");

    public static readonly Exchange1 Bcd = new("BCD");

    public static readonly Exchange1 Mcx = new("MCX");

    public static readonly Exchange1 Nscom = new("NSCOM");

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
