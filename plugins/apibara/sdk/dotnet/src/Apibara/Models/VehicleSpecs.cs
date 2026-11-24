using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

/// <summary>
/// Normalized vehicle specifications. Field availability varies by auction source and lot.
/// </summary>
public record VehicleSpecs
{
    /// <summary>
    /// Normalized body style used by the body_style filter. IAAI uses VehicleClass. Copart primarily uses the source-backed Body Style field; when that source field is missing, a conservative fallback is allowed only from explicit vehicle-type labels that are themselves body categories (for example Sedan, SUV, Coupe, Convertible). Generic AUTOMOBILE is not guessed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body_style")]
    public string? BodyStyle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
