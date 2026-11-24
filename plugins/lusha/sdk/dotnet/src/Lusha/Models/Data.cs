using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record Data
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnId")]
    public string? ColumnId { get; init; }

    /// <summary>
    /// Controls which rows a column operation applies to. <c>all</c> re-runs every row, including already-processed ones. <c>missing</c> only runs rows that don't have a value for this column yet. <c>specific</c> requires <c>entityIds</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runScope")]
    public RunScope? RunScope { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
