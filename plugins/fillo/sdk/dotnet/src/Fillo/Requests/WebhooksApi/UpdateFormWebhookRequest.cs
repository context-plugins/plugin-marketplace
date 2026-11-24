using Fillo.Models;

namespace Fillo.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateFormWebhook operation.
/// </summary>
public sealed record UpdateFormWebhookRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// A webhook id.
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1ManageFormsWebhooksRequest1 Body { get; init; }
}
