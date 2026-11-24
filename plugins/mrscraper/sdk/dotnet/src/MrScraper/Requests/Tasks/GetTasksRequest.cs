namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the GetTasks operation.
/// </summary>
public sealed record GetTasksRequest
{
    /// <summary>
    /// Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
    /// </summary>
    public required string StartAt { get; init; }

    /// <summary>
    /// End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days)
    /// </summary>
    public required string EndAt { get; init; }

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
    /// Custom date range column
    /// </summary>
    public string? DateRangeColumn { get; init; }

    /// <summary>
    /// Filter by domain
    /// </summary>
    public string? Domain { get; init; }

    /// <summary>
    /// Filter by action
    /// </summary>
    public string? Action { get; init; }

    /// <summary>
    /// Filter by status
    /// </summary>
    public string? Status { get; init; }

    /// <summary>
    /// Filter by jobId
    /// </summary>
    public int? JobId { get; init; }

    /// <summary>
    /// Filter tokenUsage batch parent tasks
    /// </summary>
    public bool? IsParent { get; init; }

    /// <summary>
    /// Return only total count without loading task data
    /// </summary>
    public bool? CountOnly { get; init; }
}
