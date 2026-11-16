namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the GetExternalLink operation.
/// </summary>
public sealed record GetExternalLinkRequest
{
    /// <summary>
    /// The ID of the <c>File</c> that has the links you want to retrieve.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// The ID of the <c>external_link</c> that you want to retrieve.
    /// </summary>
    public required string ExternalLinkId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
