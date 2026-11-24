using System;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the CancelRunRunsRunIdCancelPost operation.
/// </summary>
public sealed record CancelRunRunsRunIdCancelPostRequest
{
    public required Guid RunId { get; init; }
}
