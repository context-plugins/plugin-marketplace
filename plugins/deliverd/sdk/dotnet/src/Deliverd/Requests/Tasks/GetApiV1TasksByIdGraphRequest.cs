using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdGraph operation.
/// </summary>
public sealed record GetApiV1TasksByIdGraphRequest
{
    public required Guid Id { get; init; }
}
