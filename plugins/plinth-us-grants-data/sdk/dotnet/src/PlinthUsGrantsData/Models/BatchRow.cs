using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record BatchRow
{
    /// <summary>
    /// EIN in any format (131837418 or 13-1837418). Either this or <c>name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ein")]
    public Ein1? Ein { get; init; }

    /// <summary>
    /// Organization name to resolve when no EIN is known. Matched exactly after normalizing case and punctuation; a name several organizations share answers <c>ambiguous</c> with the candidates, and <c>state</c> narrows it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name1? Name { get; init; }

    /// <summary>
    /// Two-letter state, used only to narrow a <c>name</c> that matches in several states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// One key from GET /batch/fields.
    /// </summary>
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    /// <summary>
    /// Filing year, for the grant-graph fields. Ignored, with a note, on fields that read the latest filing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public Year1? Year { get; init; }

    /// <summary>
    /// Second EIN, for the pair fields (grants_to_*): the recipient, where the row's organization is the funder.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public To? To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
