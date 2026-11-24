using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FacetBitlyCustomBitlinksApi>))]
public sealed record FacetBitlyCustomBitlinksApi : OpenStringEnum<FacetBitlyCustomBitlinksApi>
{
    private FacetBitlyCustomBitlinksApi(string value) : base(value)
    {
    }

    public static readonly FacetBitlyCustomBitlinksApi Countries = new("countries");

    public static readonly FacetBitlyCustomBitlinksApi Cities = new("cities");

    public static readonly FacetBitlyCustomBitlinksApi Devices = new("devices");

    public static readonly FacetBitlyCustomBitlinksApi Referrers = new("referrers");

    public static readonly FacetBitlyCustomBitlinksApi ReferrersByDomain = new("referrers_by_domain");

    public static readonly FacetBitlyCustomBitlinksApi ReferringDomains = new("referring_domains");

    public static readonly FacetBitlyCustomBitlinksApi ReferringNetworks = new("referring_networks");

    public static readonly FacetBitlyCustomBitlinksApi ShortenCounts = new("shorten_counts");

    public static readonly FacetBitlyCustomBitlinksApi Destinations = new("destinations");

    public TResult Match<TResult>(Func<TResult> onCountries,
        Func<TResult> onCities,
        Func<TResult> onDevices,
        Func<TResult> onReferrers,
        Func<TResult> onReferrersByDomain,
        Func<TResult> onReferringDomains,
        Func<TResult> onReferringNetworks,
        Func<TResult> onShortenCounts,
        Func<TResult> onDestinations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Countries => onCountries(),
            _ when this == Cities => onCities(),
            _ when this == Devices => onDevices(),
            _ when this == Referrers => onReferrers(),
            _ when this == ReferrersByDomain => onReferrersByDomain(),
            _ when this == ReferringDomains => onReferringDomains(),
            _ when this == ReferringNetworks => onReferringNetworks(),
            _ when this == ShortenCounts => onShortenCounts(),
            _ when this == Destinations => onDestinations(),
            _ => otherwise(Value)
        };

    public void Match(Action onCountries,
        Action onCities,
        Action onDevices,
        Action onReferrers,
        Action onReferrersByDomain,
        Action onReferringDomains,
        Action onReferringNetworks,
        Action onShortenCounts,
        Action onDestinations,
        Action<string> otherwise)
    {
        if (this == Countries) onCountries();
        else if (this == Cities) onCities();
        else if (this == Devices) onDevices();
        else if (this == Referrers) onReferrers();
        else if (this == ReferrersByDomain) onReferrersByDomain();
        else if (this == ReferringDomains) onReferringDomains();
        else if (this == ReferringNetworks) onReferringNetworks();
        else if (this == ShortenCounts) onShortenCounts();
        else if (this == Destinations) onDestinations();
        else otherwise(Value);
    }
}
