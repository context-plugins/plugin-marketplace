namespace Tabby.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhooks operation.
/// </summary>
public sealed record GetWebhooksRequest
{
    /// <summary>
    /// Used for multi store/countries setup, please contact your Account manager to recognize that
    /// </summary>
    public required string XMerchantCode { get; init; }
}
