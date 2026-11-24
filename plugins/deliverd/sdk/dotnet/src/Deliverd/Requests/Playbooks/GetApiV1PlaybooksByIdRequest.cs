using System;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the GetApiV1PlaybooksById operation.
/// </summary>
public sealed record GetApiV1PlaybooksByIdRequest
{
    public required Guid Id { get; init; }
}
