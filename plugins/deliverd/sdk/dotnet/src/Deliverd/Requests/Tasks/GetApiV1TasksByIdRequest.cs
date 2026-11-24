using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksById operation.
/// </summary>
public sealed record GetApiV1TasksByIdRequest
{
    public required Guid Id { get; init; }
}
