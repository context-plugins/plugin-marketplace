using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Single contact point response.
/// </summary>
public record ContactPointResult
{
    /// <summary>
    /// Contact point used to deliver monitor notifications.
    /// </summary>
    [JsonPropertyName("data")]
    public required ContactPointApiDto Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
