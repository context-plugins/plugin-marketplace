namespace BundleSocial.Requests.PostCsv;

/// <summary>
/// The inputs of the PostCsvGetList operation.
/// </summary>
public sealed record PostCsvGetListRequest
{
    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
