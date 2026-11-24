namespace Divvy.Requests.Exports;

/// <summary>
/// The inputs of the GetDownloadLink operation.
/// </summary>
public sealed record GetDownloadLinkRequest
{
    public required int ExportId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
