using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Create a new trainable model derived from an existing (trainable) one.
/// </summary>
public record ModelForkRequest
{
    [JsonPropertyName("source_model_id")]
    public required Guid SourceModelId { get; init; }

    [JsonPropertyName("name")]
    [StringLength(255, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
