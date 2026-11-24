using System;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the PostApiV1FlowsByIdCancel operation.
/// </summary>
public sealed record PostApiV1FlowsByIdCancelRequest
{
    public required Guid Id { get; init; }
}
