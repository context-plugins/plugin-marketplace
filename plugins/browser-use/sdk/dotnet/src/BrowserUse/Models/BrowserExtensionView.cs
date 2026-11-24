using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// An extension installed in a browser session.
/// </summary>
public record BrowserExtensionView
{
    /// <summary>
    /// Extension ID from POST /api/v4/extensions
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Chromium extension ID, as in chrome-extension://{runtimeId}/
    /// </summary>
    [JsonPropertyName("runtimeId")]
    public required string RuntimeId { get; init; }

    /// <summary>
    /// Version from the extension manifest
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
