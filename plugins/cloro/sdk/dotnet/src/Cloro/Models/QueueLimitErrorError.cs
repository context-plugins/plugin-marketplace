using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record QueueLimitErrorError
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonPropertyName("error")]
    public required Error7 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
