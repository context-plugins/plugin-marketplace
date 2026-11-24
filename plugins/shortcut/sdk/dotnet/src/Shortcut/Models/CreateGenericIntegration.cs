using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateGenericIntegration
{
    [JsonPropertyName("webhook_url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string WebhookUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret")]
    [StringLength(128, MinimumLength = 1)]
    public string? Secret { get; init; }
}
