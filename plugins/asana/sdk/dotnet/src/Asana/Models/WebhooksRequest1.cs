using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record WebhooksRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public WebhookUpdateRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
