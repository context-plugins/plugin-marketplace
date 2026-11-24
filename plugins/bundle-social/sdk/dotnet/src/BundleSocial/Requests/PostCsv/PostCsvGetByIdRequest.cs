namespace BundleSocial.Requests.PostCsv;

/// <summary>
/// The inputs of the PostCsvGetById operation.
/// </summary>
public sealed record PostCsvGetByIdRequest
{
    public required string ImportId { get; init; }
}
