using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Container object, containing income details.
/// <para>
/// The Income Summary object with income summarised and classified by type: regular, irregular or other sources (created/refreshed across up to 10 institutions)
/// </para>
/// </summary>
public record IncomeResponse
{
    /// <summary>
    /// Always "income".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The identifier of the income resource to be retrieved.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Number of days covered by the summary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverageDays")]
    public long? CoverageDays { get; init; }

    /// <summary>
    /// Start month for the period for which the Income summary is generated. The period of time relates to the account and transaction data used as input into the summary.
    /// </summary>
    [JsonPropertyName("fromMonth")]
    public required string FromMonth { get; init; }

    /// <summary>
    /// End month (usually the current month) for the period for which the Income summary is generated.
    /// </summary>
    [JsonPropertyName("toMonth")]
    public required string ToMonth { get; init; }

    /// <summary>
    /// Required true
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regular")]
    public IReadOnlyList<Regular>? Regular { get; init; }

    /// <summary>
    /// Required true
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("irregular")]
    public IReadOnlyList<Irregular>? Irregular { get; init; }

    /// <summary>
    /// Required true
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otherCredit")]
    public IReadOnlyList<OtherCredit>? OtherCredit { get; init; }

    /// <summary>
    /// Summary totals relating to income analysis
    /// </summary>
    [JsonPropertyName("summary")]
    public required Summary Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public LinksAffordabilityIncomeApi? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
