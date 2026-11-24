using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the ListContactsTables operation.
/// </summary>
public sealed record ListContactsTablesRequest
{
    public required TableListRequest Body { get; init; }
}
