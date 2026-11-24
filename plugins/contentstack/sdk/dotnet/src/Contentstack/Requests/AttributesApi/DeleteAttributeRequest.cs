namespace Contentstack.Requests.AttributesApi;

/// <summary>
/// The inputs of the DeleteAttribute operation.
/// </summary>
public sealed record DeleteAttributeRequest
{
    /// <summary>
    /// The unique identifier of the attribute.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
