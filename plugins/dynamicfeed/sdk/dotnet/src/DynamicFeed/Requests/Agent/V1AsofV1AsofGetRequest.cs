using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1AsofV1AsofGet operation.
/// </summary>
public sealed record V1AsofV1AsofGetRequest
{
    /// <summary>
    /// tool name, e.g. current_weather (the keyless MCP tool names)
    /// </summary>
    public required string Tool { get; init; }

    /// <summary>
    /// ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z
    /// </summary>
    public required string T { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
