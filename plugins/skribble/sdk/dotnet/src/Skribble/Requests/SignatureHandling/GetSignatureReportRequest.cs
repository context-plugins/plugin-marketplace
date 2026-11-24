using System;
using Skribble.Models.Enums;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the GetSignatureReport operation.
/// </summary>
public sealed record GetSignatureReportRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Format of the Report.
    /// </summary>
    public TypeSkribbleSignatureHandlingApi Type { get; init; } = TypeSkribbleSignatureHandlingApi.Pdf;
}
