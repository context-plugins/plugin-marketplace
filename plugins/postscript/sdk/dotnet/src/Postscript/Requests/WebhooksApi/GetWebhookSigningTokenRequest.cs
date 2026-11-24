namespace Postscript.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookSigningToken operation.
/// </summary>
public sealed record GetWebhookSigningTokenRequest
{
    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used only by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
