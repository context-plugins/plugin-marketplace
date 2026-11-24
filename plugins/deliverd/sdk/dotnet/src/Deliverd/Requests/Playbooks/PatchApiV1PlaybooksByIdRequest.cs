using System;
using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PatchApiV1PlaybooksById operation.
/// </summary>
public sealed record PatchApiV1PlaybooksByIdRequest
{
    public required Guid Id { get; init; }

    public ApiV1PlaybooksRequest? Body { get; init; }
}
