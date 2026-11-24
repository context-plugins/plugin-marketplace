using Postscript.Models.Enums;

namespace Postscript.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ExampleEvent operation.
/// </summary>
public sealed record ExampleEventRequest
{
    /// <summary>
    /// Webhook subscription <c>event</c> type.
    /// </summary>
    public Event1 Event { get; init; } = Event1.ShopTest;

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used only by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
