namespace Paid.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListWebhooks operation.
/// </summary>
public sealed record ListWebhooksRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
