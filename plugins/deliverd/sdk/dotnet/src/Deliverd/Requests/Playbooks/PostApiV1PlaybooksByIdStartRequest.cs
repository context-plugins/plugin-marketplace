using System;
using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PostApiV1PlaybooksByIdStart operation.
/// </summary>
public sealed record PostApiV1PlaybooksByIdStartRequest
{
    public required Guid Id { get; init; }

    public ApiV1PlaybooksStartRequest? Body { get; init; }
}
