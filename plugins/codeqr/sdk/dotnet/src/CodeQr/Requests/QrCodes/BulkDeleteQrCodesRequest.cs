using System.Collections.Generic;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the BulkDeleteQrCodes operation.
/// </summary>
public sealed record BulkDeleteQrCodesRequest
{
    /// <summary>
    /// Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
    /// </summary>
    public required IReadOnlyList<string> QrcodeIds { get; init; }
}
