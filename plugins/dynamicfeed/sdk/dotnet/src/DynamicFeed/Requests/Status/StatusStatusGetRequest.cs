using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Status;

/// <summary>
/// The inputs of the StatusStatusGet operation.
/// </summary>
public sealed record StatusStatusGetRequest
{
    /// <summary>
    /// ai | dev | infra | platform
    /// </summary>
    public Category? Category { get; init; }

    /// <summary>
    /// only services currently degraded/down
    /// </summary>
    public OnlyIssues? OnlyIssues { get; init; }

    [Maximum(200)]
    public int Limit { get; init; } = 100;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
