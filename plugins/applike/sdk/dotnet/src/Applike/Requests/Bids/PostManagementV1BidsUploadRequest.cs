using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Applike.Models;

namespace Applike.Requests.Bids;

/// <summary>
/// The inputs of the PostManagementV1BidsUpload operation.
/// </summary>
public sealed record PostManagementV1BidsUploadRequest
{
    [MinLength(1)]
    public IReadOnlyList<UploadBidInput>? Body { get; init; }
}
