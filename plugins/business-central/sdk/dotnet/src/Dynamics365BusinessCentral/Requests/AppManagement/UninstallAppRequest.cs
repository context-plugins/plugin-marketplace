using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.AppManagement;

/// <summary>
/// The inputs of the UninstallApp operation.
/// </summary>
public sealed record UninstallAppRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required Guid AppId { get; init; }

    public ApplicationsEnvironmentsAppsAppIdUninstallRequest? Body { get; init; }
}
