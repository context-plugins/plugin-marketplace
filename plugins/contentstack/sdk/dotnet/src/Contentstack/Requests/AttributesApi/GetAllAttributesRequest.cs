namespace Contentstack.Requests.AttributesApi;

/// <summary>
/// The inputs of the GetAllAttributes operation.
/// </summary>
public sealed record GetAllAttributesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
