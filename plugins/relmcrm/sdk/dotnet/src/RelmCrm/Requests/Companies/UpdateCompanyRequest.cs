using RelmCrm.Models;

namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the UpdateCompany operation.
/// </summary>
public sealed record UpdateCompanyRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required CompanyInput Body { get; init; }
}
