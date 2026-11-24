using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetSamplingRulesRequest
{
    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
