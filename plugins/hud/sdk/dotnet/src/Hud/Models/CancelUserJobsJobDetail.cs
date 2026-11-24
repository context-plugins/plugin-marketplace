using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record CancelUserJobsJobDetail
{
    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("cancelled")]
    public required int Cancelled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
