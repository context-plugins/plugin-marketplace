using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PatchApiV1TasksById operation.
/// </summary>
public sealed record PatchApiV1TasksByIdRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksRequest1? Body { get; init; }
}
