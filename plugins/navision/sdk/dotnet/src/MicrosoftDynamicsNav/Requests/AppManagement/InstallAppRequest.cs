using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.AppManagement;

/// <summary>
/// The inputs of the InstallApp operation.
/// </summary>
public sealed record InstallAppRequest
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

    public required AppInstallRequest Body { get; init; }
}
