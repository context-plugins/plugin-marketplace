using JuriSign.Models;

namespace JuriSign.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    public required int Id { get; init; }

    public WebhooksRequest1? Body { get; init; }
}
