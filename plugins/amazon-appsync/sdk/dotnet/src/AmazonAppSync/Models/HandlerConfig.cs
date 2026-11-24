using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record HandlerConfig
{
    /// <summary>
    /// The behavior for the handler.
    /// </summary>
    [JsonPropertyName("behavior")]
    public required Behavior Behavior { get; init; }

    [JsonPropertyName("integration")]
    public required Integration Integration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
