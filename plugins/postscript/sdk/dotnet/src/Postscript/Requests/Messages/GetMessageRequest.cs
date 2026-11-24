namespace Postscript.Requests.Messages;

/// <summary>
/// The inputs of the GetMessageRequest operation.
/// </summary>
public sealed record GetMessageRequest
{
    /// <summary>
    /// ID of the message request to look up.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
