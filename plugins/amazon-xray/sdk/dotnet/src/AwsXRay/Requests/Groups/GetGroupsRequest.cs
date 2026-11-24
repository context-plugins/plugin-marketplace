using AwsXRay.Models;

namespace AwsXRay.Requests.Groups;

/// <summary>
/// The inputs of the GetGroups operation.
/// </summary>
public sealed record GetGroupsRequest
{
    public GroupsRequest? Body { get; init; }
}
