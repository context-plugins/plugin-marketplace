using System.ComponentModel.DataAnnotations;
using Cubic.Models;

namespace Cubic.Requests.Organizations;

/// <summary>
/// The inputs of the UpdateMember operation.
/// </summary>
public sealed record UpdateMemberRequest
{
    /// <summary>
    /// GitHub organization login, such as acme.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string Org { get; init; }

    /// <summary>
    /// Numeric GitHub user ID of the member.
    /// </summary>
    [RegularExpression("^\\d{1,20}$")]
    public required string GithubUserId { get; init; }

    public required MemberUpdate Body { get; init; }
}
