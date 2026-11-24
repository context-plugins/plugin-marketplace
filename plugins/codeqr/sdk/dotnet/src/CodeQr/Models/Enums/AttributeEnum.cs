using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeEnum>))]
public sealed record AttributeEnum : OpenStringEnum<AttributeEnum>
{
    private AttributeEnum(string value) : base(value)
    {
    }

    public static readonly AttributeEnum Device = new("device");

    public static readonly AttributeEnum Country = new("country");

    public static readonly AttributeEnum UtmSource = new("utm_source");

    public static readonly AttributeEnum UtmMedium = new("utm_medium");

    public static readonly AttributeEnum UtmCampaign = new("utm_campaign");

    public static readonly AttributeEnum Referrer = new("referrer");

    public static readonly AttributeEnum Language = new("language");

    public static readonly AttributeEnum City = new("city");

    public static readonly AttributeEnum Region = new("region");

    public static readonly AttributeEnum Continent = new("continent");

    public static readonly AttributeEnum UtmTerm = new("utm_term");

    public static readonly AttributeEnum UtmContent = new("utm_content");

    public TResult Match<TResult>(Func<TResult> onDevice,
        Func<TResult> onCountry,
        Func<TResult> onUtmSource,
        Func<TResult> onUtmMedium,
        Func<TResult> onUtmCampaign,
        Func<TResult> onReferrer,
        Func<TResult> onLanguage,
        Func<TResult> onCity,
        Func<TResult> onRegion,
        Func<TResult> onContinent,
        Func<TResult> onUtmTerm,
        Func<TResult> onUtmContent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Device => onDevice(),
            _ when this == Country => onCountry(),
            _ when this == UtmSource => onUtmSource(),
            _ when this == UtmMedium => onUtmMedium(),
            _ when this == UtmCampaign => onUtmCampaign(),
            _ when this == Referrer => onReferrer(),
            _ when this == Language => onLanguage(),
            _ when this == City => onCity(),
            _ when this == Region => onRegion(),
            _ when this == Continent => onContinent(),
            _ when this == UtmTerm => onUtmTerm(),
            _ when this == UtmContent => onUtmContent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDevice,
        Action onCountry,
        Action onUtmSource,
        Action onUtmMedium,
        Action onUtmCampaign,
        Action onReferrer,
        Action onLanguage,
        Action onCity,
        Action onRegion,
        Action onContinent,
        Action onUtmTerm,
        Action onUtmContent,
        Action<string> otherwise)
    {
        if (this == Device) onDevice();
        else if (this == Country) onCountry();
        else if (this == UtmSource) onUtmSource();
        else if (this == UtmMedium) onUtmMedium();
        else if (this == UtmCampaign) onUtmCampaign();
        else if (this == Referrer) onReferrer();
        else if (this == Language) onLanguage();
        else if (this == City) onCity();
        else if (this == Region) onRegion();
        else if (this == Continent) onContinent();
        else if (this == UtmTerm) onUtmTerm();
        else if (this == UtmContent) onUtmContent();
        else otherwise(Value);
    }
}
