using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BuildUploadUrlResponse
{
    [JsonPropertyName("upload_url")]
    public required string UploadUrl { get; init; }

    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
