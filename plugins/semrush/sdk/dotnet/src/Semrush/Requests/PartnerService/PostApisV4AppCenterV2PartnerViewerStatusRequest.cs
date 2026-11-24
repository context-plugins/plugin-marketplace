using Semrush.Models;

namespace Semrush.Requests.PartnerService;

/// <summary>
/// The inputs of the PostApisV4AppCenterV2PartnerViewerStatus operation.
/// </summary>
public sealed record PostApisV4AppCenterV2PartnerViewerStatusRequest
{
    public ViewerStatusRequest? Body { get; init; }
}
