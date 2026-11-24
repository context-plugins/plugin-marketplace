using AwsXRay.Models;

namespace AwsXRay.Requests.Creategroup;

/// <summary>
/// The inputs of the CreateGroup operation.
/// </summary>
public sealed record CreateGroupOperationRequest
{
    public CreateGroupRequest? Body { get; init; }
}
