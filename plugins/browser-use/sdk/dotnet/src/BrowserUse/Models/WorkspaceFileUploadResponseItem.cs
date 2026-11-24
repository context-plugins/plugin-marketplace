using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record WorkspaceFileUploadResponseItem
{
    /// <summary>
    /// Upload id. Pass THIS in RunCreateRequest.attachedFileIds to attach the file to a run.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Original filename from the request
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Sanitized filename the object is stored under, e.g. "data.csv".
    /// </summary>
    [JsonPropertyName("storedName")]
    public required string StoredName { get; init; }

    /// <summary>
    /// Path within the workspace, e.g. "uploads/data.csv"
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// True if a file with this stored_name already exists in the workspace and uploading will replace it. Surface a warning to the user.
    /// </summary>
    [JsonPropertyName("willOverride")]
    public required bool WillOverride { get; init; }

    /// <summary>
    /// Presigned PUT URL (5 min expiry). PUT the file bytes with the matching Content-Type and Content-Length headers.
    /// </summary>
    [JsonPropertyName("uploadUrl")]
    public required string UploadUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
