namespace CodeQr.Requests.Tags;

/// <summary>
/// The inputs of the DeleteTag operation.
/// </summary>
public sealed record DeleteTagRequest
{
    /// <summary>
    /// The ID of the tag to delete.
    /// </summary>
    public required string Id { get; init; }
}
