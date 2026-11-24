using System;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the GetRunRunsRunIdGet operation.
/// </summary>
public sealed record GetRunRunsRunIdGetRequest
{
    public required Guid RunId { get; init; }
}
