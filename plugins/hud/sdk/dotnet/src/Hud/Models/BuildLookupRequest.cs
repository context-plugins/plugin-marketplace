using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BuildLookupRequest
{
    [JsonPropertyName("content_digests")]
    [MinLength(1)]
    [MaxLength(1000)]
    public required IReadOnlyList<string> ContentDigests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
