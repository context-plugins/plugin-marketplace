using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Versions;

/// <summary>
/// The inputs of the VersionsVersionsGet operation.
/// </summary>
public sealed record VersionsVersionsGetRequest
{
    /// <summary>
    /// exact product, e.g. python, nodejs, postgresql
    /// </summary>
    public Product? Product { get; init; }

    /// <summary>
    /// match a product name
    /// </summary>
    public Q? Q { get; init; }

    /// <summary>
    /// language | runtime | framework | database | os | tool
    /// </summary>
    public Category? Category { get; init; }

    /// <summary>
    /// exclude end-of-life release lines
    /// </summary>
    public OnlySupported? OnlySupported { get; init; }

    /// <summary>
    /// only long-term-support lines
    /// </summary>
    public OnlyLts? OnlyLts { get; init; }

    [Maximum(300)]
    public int Limit { get; init; } = 100;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
