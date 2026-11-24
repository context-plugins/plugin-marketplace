using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Robot;

/// <summary>
/// The inputs of the V1RobotReceiptV1RobotReceiptPost operation.
/// </summary>
public sealed record V1RobotReceiptV1RobotReceiptPostRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
