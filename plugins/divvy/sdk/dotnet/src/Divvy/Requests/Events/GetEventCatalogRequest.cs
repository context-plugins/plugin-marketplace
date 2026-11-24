namespace Divvy.Requests.Events;

/// <summary>
/// The inputs of the GetEventCatalog operation.
/// </summary>
public sealed record GetEventCatalogRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
