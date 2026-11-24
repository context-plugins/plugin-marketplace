using System.Collections.Generic;
using System.Text.Json.Serialization;
using Zillapi.Core.Models;
using Zillapi.Core.Validation;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Models;

public record WebhookCreate
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Events to subscribe to. Omit to receive all four.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<Event>? Events { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
