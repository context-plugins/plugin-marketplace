using System;

namespace MicrosoftDynamicsNav.Requests.ConfigurationPackages;

/// <summary>
/// The inputs of the ImportConfigurationPackage operation.
/// </summary>
public sealed record ImportConfigurationPackageRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid PackageId { get; init; }
}
