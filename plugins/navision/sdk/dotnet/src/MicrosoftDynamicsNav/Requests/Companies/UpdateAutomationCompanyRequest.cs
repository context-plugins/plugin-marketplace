using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Companies;

/// <summary>
/// The inputs of the UpdateAutomationCompany operation.
/// </summary>
public sealed record UpdateAutomationCompanyRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid AutomationCompanyId { get; init; }

    /// <summary>
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required AutomationCompanyUpdate Body { get; init; }
}
