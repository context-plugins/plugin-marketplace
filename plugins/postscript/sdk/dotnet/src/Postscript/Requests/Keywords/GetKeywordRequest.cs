namespace Postscript.Requests.Keywords;

/// <summary>
/// The inputs of the GetKeyword operation.
/// </summary>
public sealed record GetKeywordRequest
{
    /// <summary>
    /// ID of the keyword you'd like to receive.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
