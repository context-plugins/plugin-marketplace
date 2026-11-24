using Contentstack.Core.Models;

namespace Contentstack.Requests.Assets;

/// <summary>
/// The inputs of the UploadAsset operation.
/// </summary>
public sealed record UploadAssetRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// User session token for authentication. Required if not using management token.
    /// </summary>
    public string? Authtoken { get; init; }

    /// <summary>
    /// The asset file to upload.
    /// </summary>
    public BinaryContent? AssetUpload { get; init; }

    /// <summary>
    /// Display title for the asset.
    /// </summary>
    public string? AssetTitle { get; init; }

    /// <summary>
    /// Description of the asset content.
    /// </summary>
    public string? AssetDescription { get; init; }
}
