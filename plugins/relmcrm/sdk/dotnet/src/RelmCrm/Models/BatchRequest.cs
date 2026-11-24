using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using RelmCrm.Core.Models;

namespace RelmCrm.Models;

public record BatchRequest
{
    [JsonPropertyName("operations")]
    [MaxLength(100)]
    public required IReadOnlyList<Operation> Operations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
