using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Download link for CheckImageDataResponseDto.
/// </summary>
public record DownloadLinkBillV3PaymentsApi
{
    /// <summary>
    /// URL for downloading the check image. Use the URL in a GET request to download the check image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloadLink")]
    public string? DownloadLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
