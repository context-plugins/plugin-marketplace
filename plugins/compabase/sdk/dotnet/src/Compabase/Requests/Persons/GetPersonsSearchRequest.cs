using System.ComponentModel.DataAnnotations;
using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Persons;

/// <summary>
/// The inputs of the GetPersonsSearch operation.
/// </summary>
public sealed record GetPersonsSearchRequest
{
    /// <summary>
    /// Name substring to search for (case-insensitive). Must be at least
    /// <b>2 characters</b>. Matched against the stored display name using
    /// <c>ILIKE %q%</c>.
    /// </summary>
    [MinLength(2)]
    public required string Q { get; init; }

    /// <summary>
    /// Maximum number of persons to return. Capped at <b>50</b>.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;
}
