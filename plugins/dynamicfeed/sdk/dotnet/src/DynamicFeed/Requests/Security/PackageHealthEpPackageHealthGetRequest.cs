using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Security;

/// <summary>
/// The inputs of the PackageHealthEpPackageHealthGet operation.
/// </summary>
public sealed record PackageHealthEpPackageHealthGetRequest
{
    /// <summary>
    /// package name, e.g. lodash, requests, django
    /// </summary>
    public required string Package { get; init; }

    /// <summary>
    /// npm | pypi | go | maven | cargo | nuget | rubygems
    /// </summary>
    public string Ecosystem { get; init; } = "npm";

    /// <summary>
    /// exact version (optional; defaults to latest)
    /// </summary>
    public VersionModel? Version { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
