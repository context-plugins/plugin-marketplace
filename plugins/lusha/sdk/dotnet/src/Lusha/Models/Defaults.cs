using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record Defaults
{
    /// <summary>
    /// Webhook URL (HTTPS required in production)
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Default entity type for all subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityType")]
    public EntityType2? EntityType { get; init; }

    /// <summary>
    /// Default signal types for all subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalTypes")]
    public IReadOnlyList<string>? SignalTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
