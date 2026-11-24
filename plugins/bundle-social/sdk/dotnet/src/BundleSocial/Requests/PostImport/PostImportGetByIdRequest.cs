namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportGetById operation.
/// </summary>
public sealed record PostImportGetByIdRequest
{
    public required string ImportId { get; init; }
}
