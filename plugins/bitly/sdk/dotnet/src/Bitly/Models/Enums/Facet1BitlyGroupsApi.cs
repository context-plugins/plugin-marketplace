using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Facet1BitlyGroupsApi>))]
public sealed record Facet1BitlyGroupsApi : OpenStringEnum<Facet1BitlyGroupsApi>
{
    private Facet1BitlyGroupsApi(string value) : base(value)
    {
    }

    public static readonly Facet1BitlyGroupsApi Countries = new("countries");

    public static readonly Facet1BitlyGroupsApi Cities = new("cities");

    public static readonly Facet1BitlyGroupsApi Devices = new("devices");

    public static readonly Facet1BitlyGroupsApi Referrers = new("referrers");

    public static readonly Facet1BitlyGroupsApi ReferrersByDomain = new("referrers_by_domain");

    public static readonly Facet1BitlyGroupsApi ReferringDomains = new("referring_domains");

    public static readonly Facet1BitlyGroupsApi ReferringNetworks = new("referring_networks");

    public static readonly Facet1BitlyGroupsApi ShortenCounts = new("shorten_counts");

    public TResult Match<TResult>(Func<TResult> onCountries,
        Func<TResult> onCities,
        Func<TResult> onDevices,
        Func<TResult> onReferrers,
        Func<TResult> onReferrersByDomain,
        Func<TResult> onReferringDomains,
        Func<TResult> onReferringNetworks,
        Func<TResult> onShortenCounts,
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
        else otherwise(Value);
    }
}
