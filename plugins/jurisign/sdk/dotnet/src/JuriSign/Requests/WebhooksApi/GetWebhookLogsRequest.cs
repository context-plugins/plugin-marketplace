namespace JuriSign.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookLogs operation.
/// </summary>
public sealed record GetWebhookLogsRequest
{
    public required int Id { get; init; }

    public int PerPage { get; init; } = 20;
}
