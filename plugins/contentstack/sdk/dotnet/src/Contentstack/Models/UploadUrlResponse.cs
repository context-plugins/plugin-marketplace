using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation;
using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Models;

/// <summary>
/// A pre-signed URL for uploading build artifacts.
/// </summary>
public record UploadUrlResponse
{
    /// <summary>
    /// The pre-signed URL to use for uploading the build artifact file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upload_url")]
    [Format(FormatKind.Uri)]
    public string? UploadUrl { get; init; }

    /// <summary>
    /// Unique identifier for this upload, used when creating a deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upload_uid")]
    public string? UploadUid { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the pre-signed URL expires (10 minutes).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
