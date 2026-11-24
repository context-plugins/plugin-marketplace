using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1UploadMultipartCompleteRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("teamId")]
    public string? TeamId { get; init; }

    [JsonPropertyName("parts")]
    [MinLength(1)]
    [MaxLength(10000)]
    public required IReadOnlyList<Part2> Parts { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("uploadId")]
    public required string UploadId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
