using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EbaySite>))]
public sealed record EbaySite : OpenStringEnum<EbaySite>
{
    private EbaySite(string value) : base(value)
    {
    }

    public static readonly EbaySite EbayCom = new("ebay.com");

    public static readonly EbaySite EbayCoUk = new("ebay.co.uk");

    public static readonly EbaySite EbayDe = new("ebay.de");

    public static readonly EbaySite EbayFr = new("ebay.fr");

    public static readonly EbaySite EbayIt = new("ebay.it");

    public static readonly EbaySite EbayEs = new("ebay.es");

    public static readonly EbaySite EbayCa = new("ebay.ca");

    public static readonly EbaySite EbayComAu = new("ebay.com.au");

    public TResult Match<TResult>(Func<TResult> onEbayCom,
        Func<TResult> onEbayCoUk,
        Func<TResult> onEbayDe,
        Func<TResult> onEbayFr,
        Func<TResult> onEbayIt,
        Func<TResult> onEbayEs,
        Func<TResult> onEbayCa,
        Func<TResult> onEbayComAu,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EbayCom => onEbayCom(),
            _ when this == EbayCoUk => onEbayCoUk(),
            _ when this == EbayDe => onEbayDe(),
            _ when this == EbayFr => onEbayFr(),
            _ when this == EbayIt => onEbayIt(),
            _ when this == EbayEs => onEbayEs(),
            _ when this == EbayCa => onEbayCa(),
            _ when this == EbayComAu => onEbayComAu(),
            _ => otherwise(Value)
        };

    public void Match(Action onEbayCom,
        Action onEbayCoUk,
        Action onEbayDe,
        Action onEbayFr,
        Action onEbayIt,
        Action onEbayEs,
        Action onEbayCa,
        Action onEbayComAu,
        Action<string> otherwise)
    {
        if (this == EbayCom) onEbayCom();
        else if (this == EbayCoUk) onEbayCoUk();
        else if (this == EbayDe) onEbayDe();
        else if (this == EbayFr) onEbayFr();
        else if (this == EbayIt) onEbayIt();
        else if (this == EbayEs) onEbayEs();
        else if (this == EbayCa) onEbayCa();
        else if (this == EbayComAu) onEbayComAu();
        else otherwise(Value);
    }
}
