using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListBuildsForProjectInput
{
    /// <summary>
    /// The name of the CodeBuild project.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    /// <summary>
    /// The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order. Valid values include: ASCENDING: List the build identifiers in ascending order, by build number. DESCENDING: List the build identifiers in descending order, by build number. If the project has more than 100 builds, setting the sort order will result in an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrder3? SortOrder { get; init; }

    /// <summary>
    /// During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
