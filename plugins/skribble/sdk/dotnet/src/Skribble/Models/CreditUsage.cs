using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreditUsage
{
    /// <summary>
    /// The API endpoint being consumed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public string? Endpoint { get; init; }

    /// <summary>
    /// Number of credits consumed by the endpoint call
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public int? Requests { get; init; }

    /// <summary>
    /// The number of credits consumed through the corresponding endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public int? Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
