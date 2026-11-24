using System;

namespace MicrosoftDynamicsNav.Requests.Companies;

/// <summary>
/// The inputs of the ListAutomationCompanies operation.
/// </summary>
public sealed record ListAutomationCompaniesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
