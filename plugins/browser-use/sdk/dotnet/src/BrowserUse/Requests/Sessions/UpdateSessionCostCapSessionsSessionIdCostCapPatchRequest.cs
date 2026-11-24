using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the UpdateSessionCostCapSessionsSessionIdCostCapPatch operation.
/// </summary>
public sealed record UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest
{
    public required Guid SessionId { get; init; }

    public required SessionCostCapRequest Body { get; init; }
}
