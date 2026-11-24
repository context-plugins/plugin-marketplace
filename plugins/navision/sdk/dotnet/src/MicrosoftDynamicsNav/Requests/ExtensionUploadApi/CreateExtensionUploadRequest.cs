using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.ExtensionUploadApi;

/// <summary>
/// The inputs of the CreateExtensionUpload operation.
/// </summary>
public sealed record CreateExtensionUploadRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required ExtensionUploadCreate Body { get; init; }
}
