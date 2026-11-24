using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Container object containing connection data.
/// </summary>
public record UserGetConnection
{
    /// <summary>
    /// Always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Count of accounts.
    /// </summary>
    [JsonPropertyName("count")]
    public required long Count { get; init; }

    /// <summary>
    /// Connections data.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<GetUserConnectionData> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
