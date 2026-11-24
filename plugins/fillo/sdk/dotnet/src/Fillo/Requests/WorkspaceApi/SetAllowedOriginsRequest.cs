using Fillo.Models;

namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the SetAllowedOrigins operation.
/// </summary>
public sealed record SetAllowedOriginsRequest
{
    public required ApiV1ManageProjectOriginsRequest Body { get; init; }
}
