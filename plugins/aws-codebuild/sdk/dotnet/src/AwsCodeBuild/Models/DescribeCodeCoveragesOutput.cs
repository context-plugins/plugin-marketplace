using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DescribeCodeCoveragesOutput
{
    /// <summary>
    /// If there are more items to return, this contains a token that is passed to a subsequent call to DescribeCodeCoverages to retrieve the next set of items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// An array of CodeCoverage objects that contain the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codeCoverages")]
    public IReadOnlyList<CodeCoverage>? CodeCoverages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
