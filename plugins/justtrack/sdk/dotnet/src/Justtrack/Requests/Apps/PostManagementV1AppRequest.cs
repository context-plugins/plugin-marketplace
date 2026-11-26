using Justtrack.Models;

namespace Justtrack.Requests.Apps;

/// <summary>
/// The inputs of the PostManagementV1App operation.
/// </summary>
public sealed record PostManagementV1AppRequest
{
    public CreateAppRequest? Body { get; init; }
}
