using Apibara.Core.Validation;
using Apibara.Core.Validation.Attributes;

namespace Apibara.Requests.ImageProxy;

/// <summary>
/// The inputs of the ProxyAuctionImage operation.
/// </summary>
public sealed record ProxyAuctionImageRequest
{
    /// <summary>
    /// Source image URL.
    /// </summary>
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }
}
