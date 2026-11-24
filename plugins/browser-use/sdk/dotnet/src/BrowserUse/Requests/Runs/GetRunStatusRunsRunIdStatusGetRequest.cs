using System;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the GetRunStatusRunsRunIdStatusGet operation.
/// </summary>
public sealed record GetRunStatusRunsRunIdStatusGetRequest
{
    public required Guid RunId { get; init; }
}
