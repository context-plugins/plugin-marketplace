using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdFindings operation.
/// </summary>
public sealed record PostApiV1TasksByIdFindingsRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksFindingsRequest? Body { get; init; }
}
