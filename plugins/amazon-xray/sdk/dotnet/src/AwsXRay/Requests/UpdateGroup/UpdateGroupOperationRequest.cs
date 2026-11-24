using AwsXRay.Models;

namespace AwsXRay.Requests.UpdateGroup;

/// <summary>
/// The inputs of the UpdateGroupInvoke operation.
/// </summary>
public sealed record UpdateGroupOperationRequest
{
    public UpdateGroupRequest? Body { get; init; }
}
