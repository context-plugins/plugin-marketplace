using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record QrcBulkUpdateRequest
{
    /// <summary>
    /// archive or edit_tags
    /// </summary>
    [JsonPropertyName("action")]
    public required ActionEnum Action { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archive")]
    public bool? Archive { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("add_tags")]
    public IReadOnlyList<string>? AddTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remove_tags")]
    public IReadOnlyList<string>? RemoveTags { get; init; }

    /// <summary>
    /// this is limited to 100 QR code ids; Pages QR codes are not supported
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qr_code_ids")]
    public IReadOnlyList<string>? QrCodeIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
