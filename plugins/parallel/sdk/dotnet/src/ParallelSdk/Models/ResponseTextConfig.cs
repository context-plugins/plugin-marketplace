using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Text output configuration. By default the response is plain text; for
/// structured output set <c>format</c> to
/// <c>{"type": "json_schema", "name": ..., "schema": {...}}</c>. The <c>json_object</c>
/// format is accepted for compatibility but produces plain text.
/// </summary>
public record ResponseTextConfig
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verbosity")]
    public Verbosity1? Verbosity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
