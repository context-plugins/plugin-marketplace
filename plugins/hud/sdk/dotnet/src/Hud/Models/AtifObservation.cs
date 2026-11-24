using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record AtifObservation
{
    [JsonPropertyName("results")]
    [MaxLength(1000)]
    public required IReadOnlyList<AtifObservationResult> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
