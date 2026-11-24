using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1AiSystemsTransitionsRequest
{
    /// <summary>
    /// The step's id, from the record's steps: submit or withdraw for an agent; every other step is a person's, in the app
    /// </summary>
    [JsonPropertyName("transition")]
    [RegularExpression("^[a-z][a-z0-9_]{0,39}$")]
    public required string Transition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    [MaxLength(4000)]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
