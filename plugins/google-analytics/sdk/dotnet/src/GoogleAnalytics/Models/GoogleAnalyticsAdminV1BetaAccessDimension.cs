using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Dimensions are attributes of your data. For example, the dimension <c>userEmail</c> indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessDimension
{
    /// <summary>
    /// The API name of the dimension. See <see href="https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema">Data Access Schema</see> for the list of dimensions supported in this API. Dimensions are referenced by name in <c>dimensionFilter</c> and <c>orderBys</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionName")]
    public string? DimensionName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
