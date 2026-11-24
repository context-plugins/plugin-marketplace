using System;

namespace MicrosoftDynamicsNav.Requests.Companies;

/// <summary>
/// The inputs of the GetAutomationCompany operation.
/// </summary>
public sealed record GetAutomationCompanyRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid AutomationCompanyId { get; init; }
}
