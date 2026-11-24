namespace Postscript.Requests.Subscribers;

/// <summary>
/// The inputs of the GetSubscriber operation.
/// </summary>
public sealed record GetSubscriberRequest
{
    /// <summary>
    /// The ID for the subscriber you'd like to get.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
