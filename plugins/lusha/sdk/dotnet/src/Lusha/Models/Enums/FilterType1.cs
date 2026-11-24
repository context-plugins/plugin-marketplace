using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FilterType1>))]
public sealed record FilterType1 : OpenStringEnum<FilterType1>
{
    private FilterType1(string value) : base(value)
    {
    }

    public static readonly FilterType1 Names = new("names");

    public static readonly FilterType1 Sizes = new("sizes");

    public static readonly FilterType1 Revenues = new("revenues");

    public static readonly FilterType1 Locations = new("locations");

    public static readonly FilterType1 Sics = new("sics");

    public static readonly FilterType1 Naics = new("naics");

    public static readonly FilterType1 IndustriesLabels = new("industriesLabels");

    public static readonly FilterType1 IntentTopics = new("intentTopics");

    public static readonly FilterType1 Technologies = new("technologies");

    public TResult Match<TResult>(Func<TResult> onNames,
        Func<TResult> onSizes,
        Func<TResult> onRevenues,
        Func<TResult> onLocations,
        Func<TResult> onSics,
        Func<TResult> onNaics,
        Func<TResult> onIndustriesLabels,
        Func<TResult> onIntentTopics,
        Func<TResult> onTechnologies,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Names => onNames(),
            _ when this == Sizes => onSizes(),
            _ when this == Revenues => onRevenues(),
            _ when this == Locations => onLocations(),
            _ when this == Sics => onSics(),
            _ when this == Naics => onNaics(),
            _ when this == IndustriesLabels => onIndustriesLabels(),
            _ when this == IntentTopics => onIntentTopics(),
            _ when this == Technologies => onTechnologies(),
            _ => otherwise(Value)
        };

    public void Match(Action onNames,
        Action onSizes,
        Action onRevenues,
        Action onLocations,
        Action onSics,
        Action onNaics,
        Action onIndustriesLabels,
        Action onIntentTopics,
        Action onTechnologies,
        Action<string> otherwise)
    {
        if (this == Names) onNames();
        else if (this == Sizes) onSizes();
        else if (this == Revenues) onRevenues();
        else if (this == Locations) onLocations();
        else if (this == Sics) onSics();
        else if (this == Naics) onNaics();
        else if (this == IndustriesLabels) onIndustriesLabels();
        else if (this == IntentTopics) onIntentTopics();
        else if (this == Technologies) onTechnologies();
        else otherwise(Value);
    }
}
