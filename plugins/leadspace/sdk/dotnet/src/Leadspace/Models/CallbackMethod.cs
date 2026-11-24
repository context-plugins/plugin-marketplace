using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record CallbackMethod
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    public string? CallbackUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pollingUrl")]
    public string? PollingUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
