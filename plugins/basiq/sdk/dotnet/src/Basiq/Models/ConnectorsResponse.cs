using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// ConnectorsList contains list of connectors data.
/// </summary>
public record ConnectorsResponse
{
    /// <summary>
    /// Type identifies response data format
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// TotalCount contains total count of connectors
    /// </summary>
    [JsonPropertyName("totalCount")]
    public required long TotalCount { get; init; }

    /// <summary>
    /// Data contains list of connectors
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<DatumPlatformConnectorsApi> Data { get; init; }

    /// <summary>
    /// ResourceLinks contains resource links
    /// </summary>
    [JsonPropertyName("links")]
    public required Links1 Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
