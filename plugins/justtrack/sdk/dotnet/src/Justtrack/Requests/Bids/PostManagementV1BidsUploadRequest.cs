using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Justtrack.Models;

namespace Justtrack.Requests.Bids;

/// <summary>
/// The inputs of the PostManagementV1BidsUpload operation.
/// </summary>
public sealed record PostManagementV1BidsUploadRequest
{
    [MinLength(1)]
    public IReadOnlyList<UploadBidInput>? Body { get; init; }
}
