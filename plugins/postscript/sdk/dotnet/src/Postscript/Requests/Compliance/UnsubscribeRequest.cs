using Postscript.Models;

namespace Postscript.Requests.Compliance;

/// <summary>
/// The inputs of the Unsubscribe operation.
/// </summary>
public sealed record UnsubscribeRequest
{
    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used only by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }

    public ApiV2ComplianceUnsubscribeRequest? Body { get; init; }
}
