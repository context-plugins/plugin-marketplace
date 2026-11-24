using System;
using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PostApiV1PlaybooksByIdUse operation.
/// </summary>
public sealed record PostApiV1PlaybooksByIdUseRequest
{
    public required Guid Id { get; init; }

    public ApiV1PlaybooksUseRequest? Body { get; init; }
}
