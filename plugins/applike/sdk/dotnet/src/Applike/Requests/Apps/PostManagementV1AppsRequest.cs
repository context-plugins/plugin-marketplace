using Applike.Models;

namespace Applike.Requests.Apps;

/// <summary>
/// The inputs of the PostManagementV1Apps operation.
/// </summary>
public sealed record PostManagementV1AppsRequest
{
    public ListAppsRequest? Body { get; init; }
}
