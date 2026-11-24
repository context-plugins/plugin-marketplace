namespace Basiq.Requests.Jobs;

/// <summary>
/// The inputs of the GetUserJobs operation.
/// </summary>
public sealed record GetUserJobsRequest
{
    /// <summary>
    /// User identifier
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Connection identification filter. e.g. connection.id.eq('ab63cd')
    /// </summary>
    public string? Filter { get; init; }
}
