using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Companies;

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
