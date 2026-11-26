using System;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Requests.ExtensionUploadApi;

/// <summary>
/// The inputs of the UploadExtensionFile operation.
/// </summary>
public sealed record UploadExtensionFileRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid ExtensionUploadId { get; init; }

    /// <summary>
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required BinaryContent Body { get; init; }
}
