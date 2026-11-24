using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Companies;

/// <summary>
/// The inputs of the CreateAutomationCompany operation.
/// </summary>
public sealed record CreateAutomationCompanyRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required AutomationCompanyCreate Body { get; init; }
}
