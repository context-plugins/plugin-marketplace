using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

public record RunAttachment
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Filename shown to the user, e.g. "data.csv".
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("contentType")]
    public required string ContentType { get; init; }

    [JsonPropertyName("sizeBytes")]
    public required int SizeBytes { get; init; }

    /// <summary>
    /// "pending" | "uploaded".
    /// </summary>
    [JsonPropertyName("status")]
    public required Status3 Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
