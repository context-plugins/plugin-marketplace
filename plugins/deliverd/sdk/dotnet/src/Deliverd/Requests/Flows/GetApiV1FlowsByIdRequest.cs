using System;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the GetApiV1FlowsById operation.
/// </summary>
public sealed record GetApiV1FlowsByIdRequest
{
    public required Guid Id { get; init; }
}
