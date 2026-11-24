using Postscript.Models;

namespace Postscript.Requests.Subscribers;

/// <summary>
/// The inputs of the UpdateSubscriberById operation.
/// </summary>
public sealed record UpdateSubscriberByIdRequest
{
    /// <summary>
    /// ID of the subscriber you'd like to update.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }

    public ApiV2SubscribersRequest? Body { get; init; }
}
