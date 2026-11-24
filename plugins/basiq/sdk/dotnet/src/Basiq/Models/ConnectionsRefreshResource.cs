using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing details for connections refresh.
/// </summary>
public record ConnectionsRefreshResource
{
    /// <summary>
    /// Type, always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Job details data.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<ConnectionResponseResource> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
