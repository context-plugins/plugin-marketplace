using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record Loa
{
    /// <summary>
    /// The binary contents of the LOA-CFA document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loaContent")]
    public string? LoaContent { get; init; }

    /// <summary>
    /// The standard media type for the LOA-CFA document. The only supported value is application/pdf.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loaContentType")]
    public LoaContentType? LoaContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
