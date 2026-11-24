using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Requests.Schema;

/// <summary>
/// The inputs of the GetIntrospectionSchema operation.
/// </summary>
public sealed record GetIntrospectionSchemaRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The schema format: SDL or JSON.
    /// </summary>
    public required Format Format { get; init; }

    /// <summary>
    /// A flag that specifies whether the schema introspection should contain directives.
    /// </summary>
    public bool? IncludeDirectives { get; init; }
}
