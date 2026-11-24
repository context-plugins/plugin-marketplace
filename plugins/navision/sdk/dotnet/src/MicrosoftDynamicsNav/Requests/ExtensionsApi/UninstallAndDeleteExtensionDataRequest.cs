using System;

namespace MicrosoftDynamicsNav.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the UninstallAndDeleteExtensionData operation.
/// </summary>
public sealed record UninstallAndDeleteExtensionDataRequest
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
