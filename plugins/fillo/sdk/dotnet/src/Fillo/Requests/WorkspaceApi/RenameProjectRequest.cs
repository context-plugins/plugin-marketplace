using Fillo.Models;

namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the RenameProject operation.
/// </summary>
public sealed record RenameProjectRequest
{
    public required ApiV1ManageProjectRequest Body { get; init; }
}
