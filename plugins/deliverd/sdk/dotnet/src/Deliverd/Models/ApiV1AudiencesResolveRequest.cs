using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1AudiencesResolveRequest
{
    [JsonPropertyName("phrases")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<string> Phrases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
