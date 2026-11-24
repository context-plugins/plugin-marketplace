using System;

namespace MicrosoftDynamicsNav.Requests.ConfigurationPackages;

/// <summary>
/// The inputs of the ListConfigurationPackages operation.
/// </summary>
public sealed record ListConfigurationPackagesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
