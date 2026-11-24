namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetSubscriptionById operation.
/// </summary>
public sealed record GetSubscriptionByIdRequest
{
    /// <summary>
    /// Subscription ID
    /// </summary>
    public required string Id { get; init; }
}
