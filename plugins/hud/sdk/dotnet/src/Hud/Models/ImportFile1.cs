using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// The bundle, as it was when the import started
/// </summary>
public record ImportFile1
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("filename")]
    public required string Filename { get; init; }

    [JsonPropertyName("size_bytes")]
    public required int SizeBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
