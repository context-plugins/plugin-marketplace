using Basiq.Models;

namespace Basiq.Requests.Jobs;

/// <summary>
/// The inputs of the PostJobMfa operation.
/// </summary>
public sealed record PostJobMfaRequest
{
    /// <summary>
    /// The identifier of the job.
    /// </summary>
    public required string JobId { get; init; }

    public required JobsMfaRequest Body { get; init; }
}
