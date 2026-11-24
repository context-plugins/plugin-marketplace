using System.ComponentModel.DataAnnotations;
using Cubic.Core.Validation.Attributes;
using Cubic.Models.Enums;

namespace Cubic.Requests.Organizations;

/// <summary>
/// The inputs of the ListMembers operation.
/// </summary>
public sealed record ListMembersRequest
{
    /// <summary>
    /// GitHub organization login, such as acme.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string Org { get; init; }

    /// <summary>
    /// Match part of a GitHub login.
    /// </summary>
    [MaxLength(255)]
    public string? Search { get; init; }

    public Role? Role { get; init; }

    /// <summary>
    /// true for members with a seat, false for members without one.
    /// </summary>
    public Seat? Seat { get; init; }

    /// <summary>
    /// The nextCursor from the previous page.
    /// </summary>
    [MaxLength(255)]
    public string? Cursor { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;
}
