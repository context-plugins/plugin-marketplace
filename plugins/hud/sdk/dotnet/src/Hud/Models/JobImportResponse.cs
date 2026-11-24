using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record JobImportResponse
{
    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("status")]
    public required JobStatus Status { get; init; }

    [JsonPropertyName("traces")]
    public required IReadOnlyList<JobImportTraceResponse> Traces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
