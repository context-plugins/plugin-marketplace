namespace BundleSocial.Requests.TeamApi;

/// <summary>
/// The inputs of the TeamGetList operation.
/// </summary>
public sealed record TeamGetListRequest
{
    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;

    public string? Search { get; init; }
}
