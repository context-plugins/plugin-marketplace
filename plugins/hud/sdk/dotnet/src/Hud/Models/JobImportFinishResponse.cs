using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record JobImportFinishResponse
{
    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("status")]
    public required JobStatus Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
