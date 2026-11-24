using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// JSON object response format.
/// <para>
/// An older method of generating JSON responses.
/// Using <c>json_schema</c> is recommended for models that support it. Note that the
/// model will not generate JSON without a system or user message instructing it
/// to do so.
/// </para>
/// </summary>
public record ResponseFormatJsonObject
{
    [JsonPropertyName("type")]
    public string Type { get; } = "json_object";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
