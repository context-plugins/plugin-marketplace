using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Returned when a Send API post is still being created in the background.
/// </summary>
public record PostProcessing
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("statusText")]
    public required string StatusText { get; init; }

    [JsonPropertyName("data")]
    public required PostProcessingData Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
