using System;

namespace Zillapi.Requests.Jobs;

/// <summary>
/// The inputs of the GetJob operation.
/// </summary>
public sealed record GetJobRequest
{
    /// <summary>
    /// Job UUID.
    /// </summary>
    public required Guid Id { get; init; }
}
