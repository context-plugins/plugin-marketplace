using System;
using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PostApiV1PlaybooksByIdVersions operation.
/// </summary>
public sealed record PostApiV1PlaybooksByIdVersionsRequest
{
    public required Guid Id { get; init; }

    public ApiV1PlaybooksVersionsRequest? Body { get; init; }
}
