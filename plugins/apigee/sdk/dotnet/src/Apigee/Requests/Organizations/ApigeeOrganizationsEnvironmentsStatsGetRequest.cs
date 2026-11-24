namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsStatsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsStatsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (statsId).
    /// </summary>
    public required string StatsId { get; init; }

    /// <summary>
    /// No longer used by Apigee. Supported for backwards compatibility.
    /// </summary>
    public string? Accuracy { get; init; }

    /// <summary>
    /// Table name used to query custom aggregate tables. If this parameter is skipped, then Apigee will try to retrieve the data from fact tables which will be expensive.
    /// </summary>
    public string? AggTable { get; init; }

    /// <summary>
    /// Filter that enables you to drill down on specific dimension values.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Maximum number of result items to return.
    /// </summary>
    public string? Limit { get; init; }

    /// <summary>
    /// Offset value. Use <c>offset</c> with <c>limit</c> to enable pagination of results. For example, to display results 11-20, set limit to <c>10</c> and offset to <c>10</c>.
    /// </summary>
    public string? Offset { get; init; }

    /// <summary>
    /// No longer used by Apigee. Supported for backwards compatibility.
    /// </summary>
    public bool? Realtime { get; init; }

    /// <summary>
    /// Comma-separated list of metrics. For example: <c>sum(message_count),sum(error_count)</c>
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Routes the query to API Monitoring for the last hour.
    /// </summary>
    public bool? Sonar { get; init; }

    /// <summary>
    /// Flag that specifies whether the sort order should be ascending or descending. Valid values include: <c>DESC</c> and <c>ASC</c>.
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Comma-separated list of metrics to sort the final result.
    /// </summary>
    public string? Sortby { get; init; }

    /// <summary>
    /// Time interval for the interactive query. Time range is specified in GMT as <c>start~end</c>. For example: <c>04/15/2017 00:00~05/15/2017 23:59</c>
    /// </summary>
    public string? TimeRange { get; init; }

    /// <summary>
    /// Granularity of metrics returned. Valid values include: <c>second</c>, <c>minute</c>, <c>hour</c>, <c>day</c>, <c>week</c>, or<c> month</c>.
    /// </summary>
    public string? TimeUnit { get; init; }

    /// <summary>
    /// Top number of results to return. For example, to return the top 5 results, set <c>topk=5</c>.
    /// </summary>
    public string? Topk { get; init; }

    /// <summary>
    /// Flag that specifies whether to list timestamps in ascending (<c>true</c>) or descending (<c>false</c>) order. Apigee recommends that you set this value to <c>true</c> if you are using <c>sortby</c> with <c>sort=DESC</c>.
    /// </summary>
    public bool? TsAscending { get; init; }

    /// <summary>
    /// Timezone offset value.
    /// </summary>
    public string? Tzo { get; init; }
}
