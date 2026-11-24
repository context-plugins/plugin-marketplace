using System.Collections.Generic;
using CodeQr.Models;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the BulkCreateQrCodes operation.
/// </summary>
public sealed record BulkCreateQrCodesRequest
{
    public IReadOnlyList<QrcodesBulkRequest>? Body { get; init; }
}
