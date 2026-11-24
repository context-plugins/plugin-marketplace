using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record WebhookDelete
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
