using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record BatchTaskFailureResult
{
    /// <summary>
    /// Indicates this task failed.
    /// </summary>
    [JsonPropertyName("success")]
    public string Success { get; } = "False";

    /// <summary>
    /// The zero-based position of this task in the original request array.
    /// </summary>
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    [JsonPropertyName("error")]
    public required Error2 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
