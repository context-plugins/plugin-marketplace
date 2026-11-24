using System.Collections.Generic;
using System.Text.Json.Serialization;
using RelmCrm.Core.Models;
using RelmCrm.Core.Validation;
using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Models;

public record WebhookInput
{
    /// <summary>
    /// Public https endpoint (test mode allows localhost).
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Subset of the 5 events, or ["*"].
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<string>? Events { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
