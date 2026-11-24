using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PublicationEngagementsResponse
{
    /// <summary>
    /// The list of engagement metrics for the publication within the specified date range and granularity. Returns an empty list if there is no engagement data for the specified period.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<PublicationEngagementMetrics> Data { get; init; }

    /// <summary>
    /// The unique identifier of the publication. Passed as a path parameter in the request.
    /// </summary>
    [JsonPropertyName("publication_id")]
    public required string PublicationId { get; init; }

    /// <summary>
    /// The granularity at which the engagement metrics are reported.
    /// </summary>
    [JsonPropertyName("granularity")]
    public required PublicationEngagementGranularity2 Granularity { get; init; }

    /// <summary>
    /// The email type filter applied to the engagement metrics. Defaults to <c>all</c>.
    /// </summary>
    [JsonPropertyName("email_type")]
    public required PublicationEngagementEmailType1 EmailType { get; init; }

    /// <summary>
    /// The starting date of the engagement metrics.
    /// </summary>
    [JsonPropertyName("start_date")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The number of days of engagement metrics returned.
    /// </summary>
    [JsonPropertyName("number_of_days")]
    public required int NumberOfDays { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
