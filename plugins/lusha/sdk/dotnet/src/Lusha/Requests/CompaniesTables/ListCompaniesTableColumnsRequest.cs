using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the ListCompaniesTableColumns operation.
/// </summary>
public sealed record ListCompaniesTableColumnsRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    /// <summary>
    /// Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.
    /// </summary>
    [Format(FormatKind.Email)]
    public string? Email { get; init; }
}
