using Postscript.Models;

namespace Postscript.Requests.Messages;

/// <summary>
/// The inputs of the CreateMessage operation.
/// </summary>
public sealed record CreateMessageRequest
{
    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }

    public ApiV2MessageRequestsRequest? Body { get; init; }
}
