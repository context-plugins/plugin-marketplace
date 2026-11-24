using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// *Conditional*. Only relevant for custom fields of type <c>date</c>. This object reflects the chosen date (and optionally, time) value of a <c>date</c> custom field. If no date is selected, the value of <c>date_value</c> will be <c>null</c>.
/// </summary>
public record DateValue
{
    /// <summary>
    /// A string representing the date in YYYY-MM-DD format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// A string representing the date in ISO 8601 format. If no time value is selected, the value of <c>date-time</c> will be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_time")]
    public string? DateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
