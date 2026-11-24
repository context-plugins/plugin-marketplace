using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Tnc
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accepted")]
    public bool? Accepted { get; init; }

    /// <summary>
    /// Unix timestamp when TnC was accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accepted_at")]
    public int? AcceptedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
