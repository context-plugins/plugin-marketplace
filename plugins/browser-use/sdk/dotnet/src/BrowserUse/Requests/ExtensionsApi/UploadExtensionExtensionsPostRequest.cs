using BrowserUse.Core.Models;

namespace BrowserUse.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the UploadExtensionExtensionsPost operation.
/// </summary>
public sealed record UploadExtensionExtensionsPostRequest
{
    public required BinaryContent File { get; init; }
}
