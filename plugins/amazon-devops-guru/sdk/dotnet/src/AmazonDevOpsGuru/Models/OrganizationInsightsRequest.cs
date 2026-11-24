using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record OrganizationInsightsRequest
{
    [JsonPropertyName("StatusFilter")]
    public required ListInsightsStatusFilter StatusFilter { get; init; }

    /// <summary>
    /// The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AccountIds")]
    public IReadOnlyList<string>? AccountIds { get; init; }

    /// <summary>
    /// The ID of the organizational unit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationalUnitIds")]
    public IReadOnlyList<string>? OrganizationalUnitIds { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
