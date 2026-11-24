using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1UploadsResponse
{
    [JsonPropertyName("uploadId")]
    public required Guid UploadId { get; init; }

    [JsonPropertyName("uploadUrl")]
    public required string UploadUrl { get; init; }

    [JsonPropertyName("method")]
    public string Method { get; } = "PUT";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
