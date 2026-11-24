using Surfe.Models;

namespace Surfe.Requests.People;

/// <summary>
/// The inputs of the SearchPeople operation.
/// </summary>
public sealed record SearchPeopleRequest
{
    public required PeopleSearchRequest Body { get; init; }
}
