using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record Creative
{
    /// <summary>
    /// The ID of the ad creative to use
    /// </summary>
    [JsonPropertyName("creative_id")]
    public required string CreativeId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
