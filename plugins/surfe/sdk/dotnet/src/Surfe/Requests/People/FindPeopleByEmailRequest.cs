using Surfe.Models;

namespace Surfe.Requests.People;

/// <summary>
/// The inputs of the FindPeopleByEmail operation.
/// </summary>
public sealed record FindPeopleByEmailRequest
{
    public required PeopleFindByEmailRequest Body { get; init; }
}
