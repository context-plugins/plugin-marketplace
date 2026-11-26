using System;

namespace Dynamics365BusinessCentral.Requests.ExtensionUploadApi;

/// <summary>
/// The inputs of the InstallUploadedExtension operation.
/// </summary>
public sealed record InstallUploadedExtensionRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid ExtensionUploadId { get; init; }
}
