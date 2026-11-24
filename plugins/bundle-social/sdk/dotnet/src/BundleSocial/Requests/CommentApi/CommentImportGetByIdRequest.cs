namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentImportGetById operation.
/// </summary>
public sealed record CommentImportGetByIdRequest
{
    public required string ImportId { get; init; }
}
