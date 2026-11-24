using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

/// <summary>
/// What the act is about. An approval covers this artifact and no other: report a different hash when you record execution and it is refused as <c>approval_invalidated</c>
/// </summary>
public record Artifact
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportId")]
    public Guid? ReportId { get; init; }

    /// <summary>
    /// A Deliverd report version: the approval binds to exactly this version
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionId")]
    public Guid? VersionId { get; init; }

    /// <summary>
    /// The sha256 of the file you will act on. For a Deliverd version it must match Deliverd's own
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sha256")]
    [RegularExpression("^[0-9a-fA-F]{64}$")]
    public string? Sha256 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(300)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    [MaxLength(100)]
    public string? MimeType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(0)]
    public int? Size { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    [MaxLength(2000)]
    public string? Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
