using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record Defaults1
{
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityType")]
    public EntityTypeLushaWebhooksApi? EntityType { get; init; }

    /// <summary>
    /// Default signal types for all subscriptions. Available signals depend on entity type.
    /// Please refer to the Signal Options endpoint for a full list of available signals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalTypes")]
    public IReadOnlyList<string>? SignalTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
