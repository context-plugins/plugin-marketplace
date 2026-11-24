using System.Collections.Generic;

namespace AmazonAppSync.Requests.Tags;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceRequest
{
    /// <summary>
    /// The GraphqlApi Amazon Resource Name (ARN).
    /// </summary>
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A list of TagKey objects.
    /// </summary>
    public required IReadOnlyList<string> TagKeys { get; init; }
}
