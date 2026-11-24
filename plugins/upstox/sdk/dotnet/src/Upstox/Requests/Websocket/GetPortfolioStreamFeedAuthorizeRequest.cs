using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Websocket;

/// <summary>
/// The inputs of the GetPortfolioStreamFeedAuthorize operation.
/// </summary>
public sealed record GetPortfolioStreamFeedAuthorizeRequest
{
    /// <summary>
    /// Identifiers separated by commas denote the types of updates to receive.
    /// </summary>
    [RegularExpression("^(order|gtt_order|position|holding)(,(order|gtt_order|position|holding))*$")]
    public string? UpdateTypes { get; init; }
}
