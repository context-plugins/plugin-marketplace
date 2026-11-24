using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Requests.FileManager;

/// <summary>
/// The inputs of the UploadSingleFile operation.
/// </summary>
public sealed record UploadSingleFileRequest
{
    /// <summary>
    /// Open api file, .json or .yml or .yaml or .zip
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
    /// </summary>
    public IsPublic? IsPublic { get; init; }
}
