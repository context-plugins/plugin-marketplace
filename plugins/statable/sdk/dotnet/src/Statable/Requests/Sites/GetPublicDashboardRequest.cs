namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetPublicDashboard operation.
/// </summary>
public sealed record GetPublicDashboardRequest
{
    public required long Id { get; init; }
}
