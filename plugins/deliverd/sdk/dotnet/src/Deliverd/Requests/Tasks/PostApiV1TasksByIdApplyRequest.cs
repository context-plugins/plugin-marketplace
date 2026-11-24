using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdApply operation.
/// </summary>
public sealed record PostApiV1TasksByIdApplyRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksApplyRequest? Body { get; init; }
}
