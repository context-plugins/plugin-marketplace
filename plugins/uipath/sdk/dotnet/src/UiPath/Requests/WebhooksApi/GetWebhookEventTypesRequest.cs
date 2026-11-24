namespace UiPath.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookEventTypes operation.
/// </summary>
public sealed record GetWebhookEventTypesRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }
}
