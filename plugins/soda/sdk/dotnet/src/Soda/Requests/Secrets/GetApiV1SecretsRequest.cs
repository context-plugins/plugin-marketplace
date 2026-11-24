namespace Soda.Requests.Secrets;

/// <summary>
/// The inputs of the GetApiV1Secrets operation.
/// </summary>
public sealed record GetApiV1SecretsRequest
{
    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }
}
