using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation;
using Surfe.Core.Validation.Attributes;

namespace Surfe.Models;

public record NotificationOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
