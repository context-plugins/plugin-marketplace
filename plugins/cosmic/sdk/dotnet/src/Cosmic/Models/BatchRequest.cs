using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Cosmic.Models;

public record BatchRequest
{
    [JsonPropertyName("operations")]
    [MinLength(1)]
    [MaxLength(25)]
    public required IReadOnlyList<BatchOperation> Operations { get; init; }
}
