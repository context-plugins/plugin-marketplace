using Divvy.Models;

namespace Divvy.Requests.Reimbursements;

/// <summary>
/// The inputs of the CreateReimbursement operation.
/// </summary>
public sealed record CreateReimbursementRequest
{
    public string? ApiToken { get; init; }

    public required CreateReimbursementRequestDto Body { get; init; }
}
