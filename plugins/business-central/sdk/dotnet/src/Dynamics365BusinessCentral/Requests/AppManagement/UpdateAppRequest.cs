using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.AppManagement;

/// <summary>
/// The inputs of the UpdateApp operation.
/// </summary>
public sealed record UpdateAppRequest
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

    public required AppUpdateRequest Body { get; init; }
}
