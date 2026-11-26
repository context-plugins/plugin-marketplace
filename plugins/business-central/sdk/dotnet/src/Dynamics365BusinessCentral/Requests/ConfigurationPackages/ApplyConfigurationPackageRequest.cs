using System;

namespace Dynamics365BusinessCentral.Requests.ConfigurationPackages;

/// <summary>
/// The inputs of the ApplyConfigurationPackage operation.
/// </summary>
public sealed record ApplyConfigurationPackageRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid PackageId { get; init; }
}
