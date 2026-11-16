using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the CreateExternalLink operation.
/// </summary>
public sealed record CreateExternalLinkRequest
{
    /// <summary>
    /// Your <c>File</c> ID.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required FilesExternalLinksRequest Body { get; init; }
}
