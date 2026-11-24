using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

/// <summary>
/// Generic success envelope. Endpoint-specific payload fields appear at the top level alongside these common fields.
/// </summary>
public record SuccessEnvelope
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public bool? Success { get; init; }

    /// <summary>
    /// Echo of the input parameters specified by the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public object? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
