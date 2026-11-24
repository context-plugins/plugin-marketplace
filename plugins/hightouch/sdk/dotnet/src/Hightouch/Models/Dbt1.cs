using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record Dbt1
{
    /// <summary>
    /// Model id that refers to a dbt model
    /// </summary>
    [JsonPropertyName("modelId")]
    public required double ModelId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
