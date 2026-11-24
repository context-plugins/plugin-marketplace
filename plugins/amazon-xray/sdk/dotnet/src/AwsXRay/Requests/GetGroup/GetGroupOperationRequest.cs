using AwsXRay.Models;

namespace AwsXRay.Requests.GetGroup;

/// <summary>
/// The inputs of the GetGroupInvoke operation.
/// </summary>
public sealed record GetGroupOperationRequest
{
    public GetGroupRequest? Body { get; init; }
}
