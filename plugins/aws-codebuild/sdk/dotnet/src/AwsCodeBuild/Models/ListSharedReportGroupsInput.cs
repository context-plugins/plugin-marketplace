using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListSharedReportGroupsInput
{
    /// <summary>
    /// The order in which to list shared report groups. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrder7? SortOrder { get; init; }

    /// <summary>
    /// The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on when information about the shared report group was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public SortBy3? SortBy { get; init; }

    /// <summary>
    /// During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of paginated shared report groups per response. Use nextToken to iterate pages in the list of returned ReportGroup objects. The default value is 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
