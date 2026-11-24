using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

/// <summary>
/// Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at rest, and never returned.
/// </summary>
public record WebhookAuthenticationInput
{
    [JsonPropertyName("type")]
    public required TypeFilloSoWebhooksApi Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret")]
    [StringLength(4096, MinimumLength = 1)]
    public string? Secret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
