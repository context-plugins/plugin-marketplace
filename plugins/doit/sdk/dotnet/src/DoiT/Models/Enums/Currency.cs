using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Currency code for monetary values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Usd = new("USD");

    public static readonly Currency Ils = new("ILS");

    public static readonly Currency Eur = new("EUR");

    public static readonly Currency Aud = new("AUD");

    public static readonly Currency Cad = new("CAD");

    public static readonly Currency Gbp = new("GBP");

    public static readonly Currency Dkk = new("DKK");

    public static readonly Currency Nok = new("NOK");

    public static readonly Currency Sek = new("SEK");

    public static readonly Currency Brl = new("BRL");

    public static readonly Currency Sgd = new("SGD");

    public static readonly Currency Mxn = new("MXN");

    public static readonly Currency Chf = new("CHF");

    public static readonly Currency Myr = new("MYR");

    public static readonly Currency Twd = new("TWD");

    public static readonly Currency Egp = new("EGP");

    public static readonly Currency Zar = new("ZAR");

    public static readonly Currency Jpy = new("JPY");

    public static readonly Currency Idr = new("IDR");

    public static readonly Currency Aed = new("AED");

    public static readonly Currency Thb = new("THB");

    public static readonly Currency Cop = new("COP");

    public TResult Match<TResult>(Func<TResult> onUsd,
        Func<TResult> onIls,
        Func<TResult> onEur,
        Func<TResult> onAud,
        Func<TResult> onCad,
        Func<TResult> onGbp,
        Func<TResult> onDkk,
        Func<TResult> onNok,
        Func<TResult> onSek,
        Func<TResult> onBrl,
        Func<TResult> onSgd,
        Func<TResult> onMxn,
        Func<TResult> onChf,
        Func<TResult> onMyr,
        Func<TResult> onTwd,
        Func<TResult> onEgp,
        Func<TResult> onZar,
        Func<TResult> onJpy,
        Func<TResult> onIdr,
        Func<TResult> onAed,
        Func<TResult> onThb,
        Func<TResult> onCop,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usd => onUsd(),
            _ when this == Ils => onIls(),
            _ when this == Eur => onEur(),
            _ when this == Aud => onAud(),
            _ when this == Cad => onCad(),
            _ when this == Gbp => onGbp(),
            _ when this == Dkk => onDkk(),
            _ when this == Nok => onNok(),
            _ when this == Sek => onSek(),
            _ when this == Brl => onBrl(),
            _ when this == Sgd => onSgd(),
            _ when this == Mxn => onMxn(),
            _ when this == Chf => onChf(),
            _ when this == Myr => onMyr(),
            _ when this == Twd => onTwd(),
            _ when this == Egp => onEgp(),
            _ when this == Zar => onZar(),
            _ when this == Jpy => onJpy(),
            _ when this == Idr => onIdr(),
            _ when this == Aed => onAed(),
            _ when this == Thb => onThb(),
            _ when this == Cop => onCop(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsd,
        Action onIls,
        Action onEur,
        Action onAud,
        Action onCad,
        Action onGbp,
        Action onDkk,
        Action onNok,
        Action onSek,
        Action onBrl,
        Action onSgd,
        Action onMxn,
        Action onChf,
        Action onMyr,
        Action onTwd,
        Action onEgp,
        Action onZar,
        Action onJpy,
        Action onIdr,
        Action onAed,
        Action onThb,
        Action onCop,
        Action<string> otherwise)
    {
        if (this == Usd) onUsd();
        else if (this == Ils) onIls();
        else if (this == Eur) onEur();
        else if (this == Aud) onAud();
        else if (this == Cad) onCad();
        else if (this == Gbp) onGbp();
        else if (this == Dkk) onDkk();
        else if (this == Nok) onNok();
        else if (this == Sek) onSek();
        else if (this == Brl) onBrl();
        else if (this == Sgd) onSgd();
        else if (this == Mxn) onMxn();
        else if (this == Chf) onChf();
        else if (this == Myr) onMyr();
        else if (this == Twd) onTwd();
        else if (this == Egp) onEgp();
        else if (this == Zar) onZar();
        else if (this == Jpy) onJpy();
        else if (this == Idr) onIdr();
        else if (this == Aed) onAed();
        else if (this == Thb) onThb();
        else if (this == Cop) onCop();
        else otherwise(Value);
    }
}
