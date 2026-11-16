namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the UploadFile operation.
/// </summary>
public sealed record UploadFileRequest
{
    /// <summary>
    /// The ID of the <c>File</c> that was created to upload the file.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    /// <summary>
    /// Path to the file to upload.
    /// </summary>
    public required string File { get; init; }
}
