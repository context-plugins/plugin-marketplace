using System;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Requests.ConfigurationPackages;

/// <summary>
/// The inputs of the UploadConfigurationPackageFile operation.
/// </summary>
public sealed record UploadConfigurationPackageFileRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid PackageId { get; init; }

    public required string Code { get; init; }

    /// <summary>
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required BinaryContent Body { get; init; }
}
