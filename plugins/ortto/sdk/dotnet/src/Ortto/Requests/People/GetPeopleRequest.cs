using Ortto.Models;

namespace Ortto.Requests.People;

/// <summary>
/// The inputs of the GetPeople operation.
/// </summary>
public sealed record GetPeopleRequest
{
    public required PersonGetRequest Body { get; init; }
}
