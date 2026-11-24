using FlowAccount.Models;

namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactCreate operation.
/// </summary>
public sealed record ContactCreateRequest
{
    public required string Culture { get; init; }

    public required ContactResult Body { get; init; }
}
