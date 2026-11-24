using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record QueueLimitError
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonPropertyName("error")]
    public required Error7 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
