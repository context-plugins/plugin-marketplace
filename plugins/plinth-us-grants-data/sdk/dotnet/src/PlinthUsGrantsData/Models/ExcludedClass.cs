using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// What one <c>?exclude=</c> class cost, measured against the caller's own filter.
/// </summary>
public record ExcludedClass
{
    /// <summary>
    /// Rows dropped. Null when the cost could not be measured — see <c>unavailable</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grants")]
    public Grants? Grants { get; init; }

    /// <summary>
    /// Dollars dropped. Null when the cost could not be measured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dollars")]
    public Dollars? Dollars { get; init; }

    /// <summary>
    /// What this class means, single-sourced from config/candid-compat.json.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public Definition? Definition { get; init; }

    /// <summary>
    /// Present only when the accounting failed. The totals in the response are unaffected — a failed measurement never fails a correct answer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unavailable")]
    public Unavailable? Unavailable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
