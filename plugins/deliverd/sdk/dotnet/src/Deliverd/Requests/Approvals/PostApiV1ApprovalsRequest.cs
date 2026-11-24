using Deliverd.Models;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the PostApiV1Approvals operation.
/// </summary>
public sealed record PostApiV1ApprovalsRequest
{
    public ApiV1ApprovalsRequest? Body { get; init; }
}
