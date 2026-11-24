using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Core.Validation;
using Jid.Core.Validation.Attributes;

namespace Jid.Models;

public record V1MonitorsRequest
{
    [JsonPropertyName("entity_id")]
    public required string EntityId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook_url")]
    [RegularExpression("^https://")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
