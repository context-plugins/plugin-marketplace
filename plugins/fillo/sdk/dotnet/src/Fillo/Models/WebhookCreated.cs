using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Core.Validation;
using Fillo.Core.Validation.Attributes;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record WebhookCreated
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<string> Events { get; init; }

    /// <summary>
    /// Configured receiver-authentication mode.
    /// </summary>
    [JsonPropertyName("authentication")]
    public required AuthenticationEnum Authentication { get; init; }

    /// <summary>
    /// The HMAC signing secret. Shown once, never retrievable again.
    /// </summary>
    [JsonPropertyName("secret")]
    public required string Secret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
