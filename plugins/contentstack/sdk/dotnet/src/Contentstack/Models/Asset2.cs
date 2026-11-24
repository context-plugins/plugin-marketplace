using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation;
using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Models;

/// <summary>
/// A media asset stored in the stack.
/// </summary>
public record Asset2
{
    /// <summary>
    /// Unique identifier of the asset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the asset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// URL to access the asset file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Original file name of the uploaded file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filename")]
    public string? Filename { get; init; }

    /// <summary>
    /// MIME type of the asset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    /// <summary>
    /// File size in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_size")]
    public string? FileSize { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the asset was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
