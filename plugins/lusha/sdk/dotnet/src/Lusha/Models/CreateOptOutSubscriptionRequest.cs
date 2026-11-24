using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

/// <summary>
/// Request body for creating an opt-out webhook subscription
/// </summary>
public record CreateOptOutSubscriptionRequest
{
    /// <summary>
    /// Entity type for opt-out subscriptions. Currently only <c>contact</c> is supported.
    /// </summary>
    [JsonPropertyName("entityType")]
    public string EntityType { get; } = "contact";

    /// <summary>
    /// Your webhook endpoint URL (HTTPS required in production)
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Descriptive name for this subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(100)]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
