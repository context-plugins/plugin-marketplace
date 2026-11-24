namespace Fellow.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AppsDeveloperApiApiListWebhooks operation.
/// </summary>
public sealed record AppsDeveloperApiApiListWebhooksRequest
{
    public int? PageSize { get; init; }

    public string? Cursor { get; init; }

    public string? Filters { get; init; }
}
