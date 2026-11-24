using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record WebhooksRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public WebhookRequestModel? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
