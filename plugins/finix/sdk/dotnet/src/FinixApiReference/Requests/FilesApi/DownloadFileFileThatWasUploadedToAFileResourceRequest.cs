namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the DownloadFileFileThatWasUploadedToAFileResource operation.
/// </summary>
public sealed record DownloadFileFileThatWasUploadedToAFileResourceRequest
{
    /// <summary>
    /// The ID of the <c>File</c> that was created to upload the file.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// Stream the contents of the <c>File</c> so it's displayed inline in the user's web browser.
    /// </summary>
    public bool? Stream { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
