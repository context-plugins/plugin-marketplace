using Ortto.Models;

namespace Ortto.Requests.People;

/// <summary>
/// The inputs of the GetPeopleByIds operation.
/// </summary>
public sealed record GetPeopleByIdsRequest
{
    public required PersonGetByIdsRequest Body { get; init; }
}
