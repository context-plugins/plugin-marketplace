using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Requests.Types;

/// <summary>
/// The inputs of the GetType operation.
/// </summary>
public sealed record GetTypeRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The type name.
    /// </summary>
    public required string TypeName { get; init; }

    /// <summary>
    /// The type format: SDL or JSON.
    /// </summary>
    public required Format Format { get; init; }
}
