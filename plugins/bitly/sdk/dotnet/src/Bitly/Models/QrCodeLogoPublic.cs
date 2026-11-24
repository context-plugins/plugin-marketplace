using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record QrCodeLogoPublic
{
    /// <summary>
    /// A GUID for an image uploaded to Bitly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_guid")]
    public string? ImageGuid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
