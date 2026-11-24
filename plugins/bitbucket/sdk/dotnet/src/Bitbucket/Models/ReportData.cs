using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// A key-value element that will be displayed along with the report.
/// </summary>
public record ReportData
{
    /// <summary>
    /// The type of data contained in the value field. If not provided, then the value will be detected as a boolean, number or string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// A string describing what this data field represents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The value of the data element.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
