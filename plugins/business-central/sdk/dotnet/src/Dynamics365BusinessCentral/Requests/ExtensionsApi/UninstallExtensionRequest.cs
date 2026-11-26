using System;

namespace Dynamics365BusinessCentral.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the UninstallExtension operation.
/// </summary>
public sealed record UninstallExtensionRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The package ID of the extension
    /// </summary>
    public required Guid ExtensionId { get; init; }
}
