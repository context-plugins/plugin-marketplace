using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record DataArchbeePublicFileManagerApi
{
    /// <summary>
    /// AWS link to the uploaded file
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("src")]
    public string? Src { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
