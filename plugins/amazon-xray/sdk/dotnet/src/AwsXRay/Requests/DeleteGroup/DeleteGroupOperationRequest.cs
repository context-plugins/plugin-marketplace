using AwsXRay.Models;

namespace AwsXRay.Requests.DeleteGroup;

/// <summary>
/// The inputs of the DeleteGroupInvoke operation.
/// </summary>
public sealed record DeleteGroupOperationRequest
{
    public DeleteGroupRequest? Body { get; init; }
}
