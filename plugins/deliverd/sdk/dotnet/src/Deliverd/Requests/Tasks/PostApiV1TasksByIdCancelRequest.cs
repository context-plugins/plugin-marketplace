using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdCancel operation.
/// </summary>
public sealed record PostApiV1TasksByIdCancelRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksCancelRequest? Body { get; init; }
}
