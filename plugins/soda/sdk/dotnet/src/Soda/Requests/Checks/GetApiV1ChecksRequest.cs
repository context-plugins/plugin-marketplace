namespace Soda.Requests.Checks;

/// <summary>
/// The inputs of the GetApiV1Checks operation.
/// </summary>
public sealed record GetApiV1ChecksRequest
{
    public string? CheckIds { get; init; }

    public string? DataStandardId { get; init; }

    public string? DatasetId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
