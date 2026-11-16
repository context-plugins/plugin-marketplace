namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the GetFile operation.
/// </summary>
public sealed record GetFileRequest
{
    /// <summary>
    /// Your <c>File</c> ID.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
