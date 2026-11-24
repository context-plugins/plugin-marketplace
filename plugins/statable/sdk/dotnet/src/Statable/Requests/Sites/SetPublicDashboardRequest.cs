using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the SetPublicDashboard operation.
/// </summary>
public sealed record SetPublicDashboardRequest
{
    public required long Id { get; init; }

    public required PublicDashboard Body { get; init; }
}
