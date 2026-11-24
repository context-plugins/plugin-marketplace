using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ListTagsForResourceRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
    /// </summary>
    [JsonPropertyName("ResourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A pagination token. If multiple pages of results are returned, use the NextToken value returned with the current page of results as the value of this parameter to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
