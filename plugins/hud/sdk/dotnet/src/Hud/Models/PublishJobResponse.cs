using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record PublishJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public bool? Success { get; init; } = true;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("public_url")]
    public required string PublicUrl { get; init; }

    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
