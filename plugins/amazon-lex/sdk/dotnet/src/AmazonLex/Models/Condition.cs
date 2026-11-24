using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Condition
{
    /// <summary>
    /// The expression string that is evaluated.
    /// </summary>
    [JsonPropertyName("expressionString")]
    public required string ExpressionString { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
