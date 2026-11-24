using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.ConfigurationPackages;

/// <summary>
/// The inputs of the CreateConfigurationPackage operation.
/// </summary>
public sealed record CreateConfigurationPackageRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required CompaniesApiConfigurationPackagesRequest Body { get; init; }
}
