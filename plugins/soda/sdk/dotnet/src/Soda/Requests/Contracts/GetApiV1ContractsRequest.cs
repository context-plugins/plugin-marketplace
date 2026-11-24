namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the GetApiV1Contracts operation.
/// </summary>
public sealed record GetApiV1ContractsRequest
{
    public string? DatasetId { get; init; }

    public string? DatasetQualifiedName { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
