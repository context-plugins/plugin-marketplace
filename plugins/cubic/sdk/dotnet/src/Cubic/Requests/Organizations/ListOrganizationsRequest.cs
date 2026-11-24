using System.ComponentModel.DataAnnotations;
using Cubic.Core.Validation.Attributes;

namespace Cubic.Requests.Organizations;

/// <summary>
/// The inputs of the ListOrganizations operation.
/// </summary>
public sealed record ListOrganizationsRequest
{
    /// <summary>
    /// The nextCursor from the previous page.
    /// </summary>
    [MaxLength(255)]
    public string? Cursor { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;
}
