using UiPath.Models;

namespace UiPath.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }

    public required Webhook Body { get; init; }
}
