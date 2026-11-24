using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record CreateWebhookRequest
{
    /// <summary>
    /// The name of the webhook
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The URL to deliver webhook payloads to
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// The events to subscribe to
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<Event> Events { get; init; }

    [JsonPropertyName("scope")]
    public required Scope1 Scope { get; init; }

    /// <summary>
    /// Secret used to generate HMAC signature
    /// </summary>
    [JsonPropertyName("signing-secret")]
    public required string SigningSecret { get; init; }

    /// <summary>
    /// Whether to verify TLS on delivery
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verify-tls")]
    public bool? VerifyTls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
