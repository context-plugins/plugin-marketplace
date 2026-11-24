using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the UpdateSessionSessionsSessionIdPatch operation.
/// </summary>
public sealed record UpdateSessionSessionsSessionIdPatchRequest
{
    public required Guid SessionId { get; init; }

    public required SessionUpdateRequest Body { get; init; }
}
