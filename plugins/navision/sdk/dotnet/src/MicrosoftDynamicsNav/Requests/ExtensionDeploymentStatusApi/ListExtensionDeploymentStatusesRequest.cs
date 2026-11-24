using System;

namespace MicrosoftDynamicsNav.Requests.ExtensionDeploymentStatusApi;

/// <summary>
/// The inputs of the ListExtensionDeploymentStatuses operation.
/// </summary>
public sealed record ListExtensionDeploymentStatusesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
