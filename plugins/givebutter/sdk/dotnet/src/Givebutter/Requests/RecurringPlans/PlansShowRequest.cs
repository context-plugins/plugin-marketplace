using System.ComponentModel.DataAnnotations;

namespace Givebutter.Requests.RecurringPlans;

/// <summary>
/// The inputs of the PlansShow operation.
/// </summary>
public sealed record PlansShowRequest
{
    /// <summary>
    /// The plan uid
    /// </summary>
    public required string? Plan { get; init; }

    [MaxLength(255)]
    public string? FirstName { get; init; }

    [MaxLength(255)]
    public string? LastName { get; init; }

    public string? Email { get; init; }

    public string? Amount { get; init; }
}
