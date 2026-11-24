using Fillo.Models;

namespace Fillo.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateFormWebhook operation.
/// </summary>
public sealed record CreateFormWebhookRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsWebhooksRequest Body { get; init; }
}
