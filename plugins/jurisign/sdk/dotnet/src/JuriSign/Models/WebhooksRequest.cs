using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record WebhooksRequest
{
    /// <summary>
    /// The HTTPS URL to receive webhook payloads
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(500)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Events to subscribe to
    /// </summary>
    [JsonPropertyName("events")]
    [MinLength(1)]
    public required IReadOnlyList<Event> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
