using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A request to list users in an audience export.
/// </summary>
public record QueryAudienceExportRequest
{
    /// <summary>
    /// Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first <c>limit</c> of rows. The second request sets offset to the <c>limit</c> of the first request; the second request returns the second <c>limit</c> of rows. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    /// <summary>
    /// Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. <c>limit</c> must be positive. The API can also return fewer rows than the requested <c>limit</c>, if there aren't as many dimension values as the <c>limit</c>. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
