using Stoplight.Models.Enums;

namespace Stoplight.Requests;

/// <summary>
/// The inputs of the GetVersionsVersionIdExportFormat operation.
/// </summary>
public sealed record GetVersionsVersionIdExportFormatRequest
{
    /// <summary>
    /// This is the unique identifier for the version.
    /// </summary>
    public string VersionId { get; init; } = "";

    /// <summary>
    /// The specification / format that you want to export.
    /// </summary>
    public Format Format { get; init; } = Format.OasJson;
}
