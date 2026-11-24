namespace BundleSocial.Requests.PostCsv;

/// <summary>
/// The inputs of the PostCsvGetStatus operation.
/// </summary>
public sealed record PostCsvGetStatusRequest
{
    public required string ImportId { get; init; }
}
