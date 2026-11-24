using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.AnyOf;

namespace Cloro.Models;

public record Option
{
    /// <summary>
    /// The text ChatGPT shows for the option.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// The value that the option puts in the follow-up prompt. It can differ from <c>label</c>. <c>true</c> for a checkbox that stands alone.
    /// </summary>
    [JsonPropertyName("value")]
    public required Value Value { get; init; }

    /// <summary>
    /// Whether ChatGPT selects the option by default.
    /// </summary>
    [JsonPropertyName("selected")]
    public required bool Selected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
