using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record TimePeriodResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The localized end date of the time period in <c>YYYY-MM-DD</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_on")]
    public string? EndOn { get; init; }

    /// <summary>
    /// The localized start date of the time period in <c>YYYY-MM-DD</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public string? StartOn { get; init; }

    /// <summary>
    /// The cadence and index of the time period. The value is one of: <c>FY</c>, <c>H1</c>, <c>H2</c>, <c>Q1</c>, <c>Q2</c>, <c>Q3</c>, or <c>Q4</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public Period? Period { get; init; }

    /// <summary>
    /// A string representing the cadence code and the fiscal year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_name")]
    public string? DisplayName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public TimePeriodCompact? Parent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
