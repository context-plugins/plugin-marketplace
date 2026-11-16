using FinixApiReference.Models;

namespace FinixApiReference.Requests.FilesApi;

/// <summary>
/// The inputs of the CreateFile operation.
/// </summary>
public sealed record CreateFileRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required CreateFile Body { get; init; }
}
