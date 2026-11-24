using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Advisories;

/// <summary>
/// The inputs of the AdvisoriesCheckAdvisoriesCheckGet operation.
/// </summary>
public sealed record AdvisoriesCheckAdvisoriesCheckGetRequest
{
    /// <summary>
    /// package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g. org.apache.logging.log4j:log4j-core
    /// </summary>
    public required string Package { get; init; }

    /// <summary>
    /// exact version, e.g. 4.17.10
    /// </summary>
    public VersionModel? Version { get; init; }

    /// <summary>
    /// npm | pip | maven | go | rubygems | nuget | cargo | composer
    /// </summary>
    public Ecosystem1? Ecosystem { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
