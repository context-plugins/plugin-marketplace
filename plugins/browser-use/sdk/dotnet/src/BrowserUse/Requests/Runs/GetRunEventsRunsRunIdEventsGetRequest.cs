using System;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the GetRunEventsRunsRunIdEventsGet operation.
/// </summary>
public sealed record GetRunEventsRunsRunIdEventsGetRequest
{
    public required Guid RunId { get; init; }

    public int Limit { get; init; } = 200;

    public int After { get; init; } = 0;

    public bool IncludeOutput { get; init; } = true;
}
