using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Core.Validation;
using Airtable.Core.Validation.Attributes;

namespace Airtable.Models;

/// <summary>
/// Request body for creating a new webhook.
/// </summary>
public record WebhookCreateRequest
{
    /// <summary>
    /// The URL that will receive POST notifications when changes occur.
    /// </summary>
    [JsonPropertyName("notificationUrl")]
    [Format(FormatKind.Uri)]
    public required string NotificationUrl { get; init; }

    /// <summary>
    /// The specification defining what changes the webhook monitors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specification")]
    public WebhookSpecification? Specification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
