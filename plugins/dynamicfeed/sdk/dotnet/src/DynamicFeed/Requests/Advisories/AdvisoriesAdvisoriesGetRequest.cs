using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Advisories;

/// <summary>
/// The inputs of the AdvisoriesAdvisoriesGet operation.
/// </summary>
public sealed record AdvisoriesAdvisoriesGetRequest
{
    /// <summary>
    /// match summary / package / CVE / GHSA id
    /// </summary>
    public Q? Q { get; init; }

    /// <summary>
    /// affected package name, e.g. lodash, requests
    /// </summary>
    public Package? Package { get; init; }

    /// <summary>
    /// npm | pip | maven | go | rubygems | nuget | composer | ...
    /// </summary>
    public Ecosystem? Ecosystem { get; init; }

    /// <summary>
    /// low | moderate | high | critical
    /// </summary>
    public Severity? Severity { get; init; }

    /// <summary>
    /// minimum CVSS score (0-10)
    /// </summary>
    public MinCvss? MinCvss { get; init; }

    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
