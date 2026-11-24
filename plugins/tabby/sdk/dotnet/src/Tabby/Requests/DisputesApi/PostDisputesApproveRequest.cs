using Tabby.Models;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the PostDisputesApprove operation.
/// </summary>
public sealed record PostDisputesApproveRequest
{
    public required ApiV1DisputesApproveRequest Body { get; init; }
}
