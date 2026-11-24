using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record CodeErrorLocation
{
    /// <summary>
    /// The line number in the code. Defaults to 0 if unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line")]
    public int? Line { get; init; }

    /// <summary>
    /// The column number in the code. Defaults to 0 if unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("column")]
    public int? Column { get; init; }

    /// <summary>
    /// The span/length of the error. Defaults to -1 if unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("span")]
    public int? Span { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
