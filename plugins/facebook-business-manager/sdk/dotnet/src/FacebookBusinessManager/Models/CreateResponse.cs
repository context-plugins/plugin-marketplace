using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record CreateResponse
{
    /// <summary>
    /// The ID of the newly created object
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
