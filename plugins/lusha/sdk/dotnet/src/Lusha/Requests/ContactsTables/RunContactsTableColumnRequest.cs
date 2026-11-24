using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the RunContactsTableColumn operation.
/// </summary>
public sealed record RunContactsTableColumnRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    /// <summary>
    /// The column's ID.
    /// </summary>
    public required string ColumnId { get; init; }

    public required ColumnsRunRequest Body { get; init; }
}
