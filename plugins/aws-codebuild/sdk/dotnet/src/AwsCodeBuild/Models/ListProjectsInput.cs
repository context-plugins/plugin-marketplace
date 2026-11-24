using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListProjectsInput
{
    /// <summary>
    /// The criterion to be used to list build project names. Valid values include: CREATED_TIME: List based on when each build project was created. LAST_MODIFIED_TIME: List based on when information about each build project was last changed. NAME: List based on each build project's name. Use sortOrder to specify in what order to list the build project names based on the preceding criteria.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public SortBy? SortBy { get; init; }

    /// <summary>
    /// The order in which to list build projects. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to list build project names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi? SortOrder { get; init; }

    /// <summary>
    /// During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
