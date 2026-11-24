using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record EducationApi
{
    /// <summary>
    /// Primary field of study of the educational experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("major")]
    public string? Major { get; init; }

    /// <summary>
    /// School/University of the educational experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("school")]
    public string? School { get; init; }

    /// <summary>
    /// Degree obtained through the educational experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("degree")]
    public string? Degree { get; init; }

    /// <summary>
    /// Start date of the educational experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public int? Start { get; init; }

    /// <summary>
    /// End date of the educational experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public int? End { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
