using Postscript.Models;

namespace Postscript.Requests.Events;

/// <summary>
/// The inputs of the CreateCustomEvent operation.
/// </summary>
public sealed record CreateCustomEventRequest
{
    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }

    public ApiV2EventsRequest? Body { get; init; }
}
