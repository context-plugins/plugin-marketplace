using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TierPriceCurrency>))]
public sealed record TierPriceCurrency : OpenStringEnum<TierPriceCurrency>
{
    private TierPriceCurrency(string value) : base(value)
    {
    }

    public static readonly TierPriceCurrency Usd = new("usd");

    public static readonly TierPriceCurrency Aud = new("aud");

    public static readonly TierPriceCurrency Cad = new("cad");

    public static readonly TierPriceCurrency Eur = new("eur");

    public static readonly TierPriceCurrency Gbp = new("gbp");

    public static readonly TierPriceCurrency Inr = new("inr");

    public static readonly TierPriceCurrency Brl = new("brl");

    public static readonly TierPriceCurrency Mxn = new("mxn");

    public static readonly TierPriceCurrency Nzd = new("nzd");

    public static readonly TierPriceCurrency Dkk = new("dkk");

    public TResult Match<TResult>(Func<TResult> onUsd,
        Func<TResult> onAud,
        Func<TResult> onCad,
        Func<TResult> onEur,
        Func<TResult> onGbp,
        Func<TResult> onInr,
        Func<TResult> onBrl,
        Func<TResult> onMxn,
        Func<TResult> onNzd,
        Func<TResult> onDkk,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usd => onUsd(),
            _ when this == Aud => onAud(),
            _ when this == Cad => onCad(),
            _ when this == Eur => onEur(),
            _ when this == Gbp => onGbp(),
            _ when this == Inr => onInr(),
            _ when this == Brl => onBrl(),
            _ when this == Mxn => onMxn(),
            _ when this == Nzd => onNzd(),
            _ when this == Dkk => onDkk(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsd,
        Action onAud,
        Action onCad,
        Action onEur,
        Action onGbp,
        Action onInr,
        Action onBrl,
        Action onMxn,
        Action onNzd,
        Action onDkk,
        Action<string> otherwise)
    {
        if (this == Usd) onUsd();
        else if (this == Aud) onAud();
        else if (this == Cad) onCad();
        else if (this == Eur) onEur();
        else if (this == Gbp) onGbp();
        else if (this == Inr) onInr();
        else if (this == Brl) onBrl();
        else if (this == Mxn) onMxn();
        else if (this == Nzd) onNzd();
        else if (this == Dkk) onDkk();
        else otherwise(Value);
    }
}
