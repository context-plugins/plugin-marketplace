using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the DeletePolicy operation.
/// </summary>
public sealed record DeletePolicyRequest
{
    [MinLength(1)]
    public required string PolicyId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
