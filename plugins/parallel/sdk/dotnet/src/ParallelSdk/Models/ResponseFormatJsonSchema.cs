using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// JSON Schema response format.
/// <para>
/// Used to generate structured JSON responses.
/// Learn more about <see href="https://platform.openai.com/docs/guides/structured-outputs">Structured Outputs</see>.
/// </para>
/// </summary>
public record ResponseFormatJsonSchema
{
    /// <summary>
    /// Structured Outputs configuration options, including a JSON Schema.
    /// </summary>
    [JsonPropertyName("json_schema")]
    public required JsonSchema JsonSchema { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "json_schema";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
