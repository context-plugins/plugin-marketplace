using Paid.Models;
using Paid.Models.Enums;

namespace Paid.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookOperationRequest
{
    public required WebhooksWebhookNamePatchParametersWebhookName WebhookName { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateWebhookRequest? Body { get; init; }
}
