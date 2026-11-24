using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionCostSessionsSessionIdCostGet operation.
/// </summary>
public sealed record GetSessionCostSessionsSessionIdCostGetRequest
{
    public required Guid SessionId { get; init; }
}
