using System;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the PostApiV1FlowsByIdComplete operation.
/// </summary>
public sealed record PostApiV1FlowsByIdCompleteRequest
{
    public required Guid Id { get; init; }
}
