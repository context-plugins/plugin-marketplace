using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the <c>QueryAudienceExportResponse</c>.
/// </summary>
public record V1BetaAudienceDimension
{
    /// <summary>
    /// Optional. The API name of the dimension. See the <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions">API Dimensions</see> for the list of dimension names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionName")]
    public string? DimensionName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
