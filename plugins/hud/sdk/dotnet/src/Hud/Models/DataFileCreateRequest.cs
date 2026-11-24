using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A reservation for an upload the client is about to make.
/// </summary>
public record DataFileCreateRequest
{
    [JsonPropertyName("filename")]
    [StringLength(255, MinimumLength = 1)]
    public required string Filename { get; init; }

    [JsonPropertyName("size_bytes")]
    [Minimum(0)]
    public required int SizeBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    [StringLength(200, MinimumLength = 3)]
    public string? ContentType { get; init; } = "application/octet-stream";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public Scope? Scope { get; init; } = Scope.Member;

    /// <summary>
    /// Reserve the file as the input of this data pipeline, which may take a file larger than the data store's per-file limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline_key")]
    public PipelineKey? PipelineKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
