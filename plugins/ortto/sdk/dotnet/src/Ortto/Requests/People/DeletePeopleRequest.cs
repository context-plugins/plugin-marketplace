using Ortto.Models;

namespace Ortto.Requests.People;

/// <summary>
/// The inputs of the DeletePeople operation.
/// </summary>
public sealed record DeletePeopleRequest
{
    public required PersonDeleteRequest Body { get; init; }
}
