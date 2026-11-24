using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record ApiV1UploadMultipartInitResponse
{
    [JsonPropertyName("uploadId")]
    public required string UploadId { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("partSize")]
    [Minimum(1)]
    public required int PartSize { get; init; }

    [JsonPropertyName("parts")]
    public required IReadOnlyList<Part> Parts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
