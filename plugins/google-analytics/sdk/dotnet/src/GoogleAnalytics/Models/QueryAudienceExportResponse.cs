using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A list of users in an audience export.
/// </summary>
public record QueryAudienceExportResponse
{
    /// <summary>
    /// The total number of rows in the AudienceExport result. <c>rowCount</c> is independent of the number of rows returned in the response, the <c>limit</c> request parameter, and the <c>offset</c> request parameter. For example if a query returns 175 rows and includes <c>limit</c> of 50 in the API request, the response will contain <c>rowCount</c> of 175 but only 50 rows. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    /// <summary>
    /// Configuration data about AudienceExport being queried. Returned to help interpret the audience rows in this response. For example, the dimensions in this AudienceExport correspond to the columns in the AudienceRows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audienceExport")]
    public AudienceExport1? AudienceExport { get; init; }

    /// <summary>
    /// Rows for each user in an audience export. The number of rows in this response will be less than or equal to request's page size.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audienceRows")]
    public IReadOnlyList<V1BetaAudienceRow>? AudienceRows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
