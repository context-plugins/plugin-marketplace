namespace Fillo.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListFormWebhooks operation.
/// </summary>
public sealed record ListFormWebhooksRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
