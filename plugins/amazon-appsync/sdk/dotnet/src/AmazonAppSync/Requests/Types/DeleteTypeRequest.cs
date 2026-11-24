namespace AmazonAppSync.Requests.Types;

/// <summary>
/// The inputs of the DeleteType operation.
/// </summary>
public sealed record DeleteTypeRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The type name.
    /// </summary>
    public required string TypeName { get; init; }
}
