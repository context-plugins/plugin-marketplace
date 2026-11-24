using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the GetCompaniesTableEntities operation.
/// </summary>
public sealed record GetCompaniesTableEntitiesRequest
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

    [Maximum(100)]
    public int Page { get; init; } = 0;

    public int Size { get; init; } = 100;
}
