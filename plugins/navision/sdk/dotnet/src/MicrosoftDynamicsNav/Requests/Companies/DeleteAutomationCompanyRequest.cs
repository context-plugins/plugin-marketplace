using System;

namespace MicrosoftDynamicsNav.Requests.Companies;

/// <summary>
/// The inputs of the DeleteAutomationCompany operation.
/// </summary>
public sealed record DeleteAutomationCompanyRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid AutomationCompanyId { get; init; }
}
