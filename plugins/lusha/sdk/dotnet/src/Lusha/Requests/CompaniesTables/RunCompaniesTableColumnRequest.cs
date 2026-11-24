using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the RunCompaniesTableColumn operation.
/// </summary>
public sealed record RunCompaniesTableColumnRequest
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
