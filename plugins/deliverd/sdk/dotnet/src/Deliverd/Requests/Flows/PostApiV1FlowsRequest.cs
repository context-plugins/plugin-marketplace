using Deliverd.Models;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the PostApiV1Flows operation.
/// </summary>
public sealed record PostApiV1FlowsRequest
{
    public ApiV1FlowsRequest? Body { get; init; }
}
