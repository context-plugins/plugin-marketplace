using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdComplete operation.
/// </summary>
public sealed record PostApiV1TasksByIdCompleteRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksCompleteRequest? Body { get; init; }
}
