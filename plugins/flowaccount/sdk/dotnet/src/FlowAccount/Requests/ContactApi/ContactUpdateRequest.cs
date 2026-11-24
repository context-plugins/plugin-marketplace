using FlowAccount.Models;

namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactUpdate operation.
/// </summary>
public sealed record ContactUpdateRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required ContactResult Body { get; init; }
}
