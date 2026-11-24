namespace MrScraper.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobs operation.
/// </summary>
public sealed record GetJobsRequest
{
    /// <summary>
    /// Page size
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page number
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Sort field
    /// </summary>
    public string? SortField { get; init; }

    /// <summary>
    /// Sort order (ASC/DESC)
    /// </summary>
    public string? SortOrder { get; init; }

    /// <summary>
    /// Search term
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// Start date for created_at filter
    /// </summary>
    public string? StartAt { get; init; }

    /// <summary>
    /// End date for created_at filter
    /// </summary>
    public string? EndAt { get; init; }

    /// <summary>
    /// Custom date range column
    /// </summary>
    public string? DateRangeColumn { get; init; }

    /// <summary>
    /// Filter by name
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by status
    /// </summary>
    public string? Status { get; init; }
}
