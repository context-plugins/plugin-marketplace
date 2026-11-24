namespace AmazonFreeRtos.Requests.OtaUpdates;

/// <summary>
/// The inputs of the ListOtaUpdates operation.
/// </summary>
public sealed record ListOtaUpdatesRequest
{
    /// <summary>
    /// Maximum results.
    /// </summary>
    public int? MaxResults { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    public string? NextToken { get; init; }

    /// <summary>
    /// Filter by OTA update status.
    /// </summary>
    public string? OtaUpdateStatus { get; init; }
}
