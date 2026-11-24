using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record UpdateSubscriptionRequest2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalTypes")]
    public IReadOnlyList<string>? SignalTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(100)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isActive")]
    public bool? IsActive { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regenerateSecret")]
    public bool? RegenerateSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
