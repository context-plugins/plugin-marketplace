namespace FinixApiReference.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhook operation.
/// </summary>
public sealed record GetWebhookRequest
{
    /// <summary>
    /// The ID of <c>Webhook</c> object.
    /// </summary>
    public required string WebhookId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
