using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileIdsRequest
{
    [JsonPropertyName("file_ids")]
    [MinLength(1)]
    [MaxLength(500)]
    public required IReadOnlyList<Guid> FileIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
