using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListFleetsInput
{
    /// <summary>
    /// During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of paginated compute fleets returned per response. Use nextToken to iterate pages in the list of returned compute fleets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to list compute fleet names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrderAwsCodeBuildFleetApi? SortOrder { get; init; }

    /// <summary>
    /// The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List based on when each compute fleet was created. LAST_MODIFIED_TIME: List based on when information about each compute fleet was last changed. NAME: List based on each compute fleet's name. Use sortOrder to specify in what order to list the compute fleet names based on the preceding criteria.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public SortByAwsCodeBuildFleetApi? SortBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
