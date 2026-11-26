using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Organizations;

/// <summary>
/// The inputs of the GetBillingStatementDetail operation.
/// </summary>
public sealed record GetBillingStatementDetailRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    [MinLength(1)]
    public required string BillingStatementId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
