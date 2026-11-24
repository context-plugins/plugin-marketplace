using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record VehicleDetailsResponse
{
    /// <summary>
    /// Normalized Copart or IAAI auction vehicle record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Vehicle? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
