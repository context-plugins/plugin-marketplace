using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdLinks operation.
/// </summary>
public sealed record PostApiV1TasksByIdLinksRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksLinksRequest? Body { get; init; }
}
