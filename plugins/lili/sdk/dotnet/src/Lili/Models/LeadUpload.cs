using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

/// <summary>
/// Contains the information about an additional document to upload
/// </summary>
public record LeadUpload
{
    /// <summary>
    /// A list of Base64 encoded documents
    /// </summary>
    [JsonPropertyName("documentDataList")]
    public required IReadOnlyList<DocumentData> DocumentDataList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
