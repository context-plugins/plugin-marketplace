using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the RemoveContactsTableColumn operation.
/// </summary>
public sealed record RemoveContactsTableColumnRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    /// <summary>
    /// The column's ID.
    /// </summary>
    public required string ColumnId { get; init; }

    /// <summary>
    /// Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.
    /// </summary>
    [Format(FormatKind.Email)]
    public string? Email { get; init; }
}
