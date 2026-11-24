namespace Postscript.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookSubscription operation.
/// </summary>
public sealed record GetWebhookSubscriptionRequest
{
    /// <summary>
    /// ID of the webhook subscription to fetch.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used only by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
