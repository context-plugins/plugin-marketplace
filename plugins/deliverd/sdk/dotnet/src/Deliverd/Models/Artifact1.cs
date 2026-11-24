using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Artifact1
{
    [JsonPropertyName("kind")]
    public required KindDeliverdDevGatesApi Kind { get; init; }

    [JsonPropertyName("reportId")]
    public required string? ReportId { get; init; }

    [JsonPropertyName("versionId")]
    public required string? VersionId { get; init; }

    [JsonPropertyName("versionNumber")]
    public required double? VersionNumber { get; init; }

    [JsonPropertyName("sha256")]
    public required string? Sha256 { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("mimeType")]
    public required string? MimeType { get; init; }

    [JsonPropertyName("size")]
    public required double? Size { get; init; }

    [JsonPropertyName("uri")]
    public required string? Uri { get; init; }

    [JsonPropertyName("verified")]
    public required bool Verified { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
