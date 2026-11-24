using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record Person
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("person_id")]
    public string? PersonId { get; init; }

    /// <summary>
    /// e.g. created, updated, or suppressed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
