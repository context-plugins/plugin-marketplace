using RelmCrm.Models;

namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the CreateCompany operation.
/// </summary>
public sealed record CreateCompanyRequest
{
    /// <summary>
    /// Safely retry a create: same key + same body replays the original result.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required CompanyInput Body { get; init; }
}
