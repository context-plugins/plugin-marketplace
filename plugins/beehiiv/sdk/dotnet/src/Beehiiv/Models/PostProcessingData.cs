using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostProcessingData
{
    /// <summary>
    /// The prefixed post id. Stable — this is the id the post will have once created.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The background creation state of the post.
    /// </summary>
    [JsonPropertyName("state")]
    public string State { get; } = "pending";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
