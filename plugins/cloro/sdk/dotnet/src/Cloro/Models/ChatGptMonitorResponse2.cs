using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.AnyOf;

namespace Cloro.Models;

public record ChatGptMonitorResponse2
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// ChatGPT's response data. An array, with one response for each prompt in order, when <c>prompt</c> is an array.
    /// </summary>
    [JsonPropertyName("result")]
    public required Result111 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
