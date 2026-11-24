namespace Postscript.Requests.Messages;

/// <summary>
/// The inputs of the GetSentMessage operation.
/// </summary>
public sealed record GetSentMessageRequest
{
    /// <summary>
    /// ID of sent message to fetch.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
