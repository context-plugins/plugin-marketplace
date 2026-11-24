using System.Text.Json.Serialization;
using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Models;

public record DocsSearchRequest
{
    /// <summary>
    /// Filter text, question or document title
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// OPTIONAL. Search only by title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchOnlyTitle")]
    public bool? SearchOnlyTitle { get; init; }

    /// <summary>
    /// OPTIONAL. Wether to keep a SearchSession in our database and return its id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("persistSearch")]
    public bool? PersistSearch { get; init; }

    /// <summary>
    /// OPTIONAL. id for the SearchSession object to update. More useful for AI chat.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchSessionId")]
    public string? SearchSessionId { get; init; }

    /// <summary>
    /// OPTIONAL. Return only one document with this id, if there is one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docId")]
    public string? DocId { get; init; }

    /// <summary>
    /// OPTIONAL. Return documents with dataText in this format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTextFormat")]
    public DataTextFormat? DataTextFormat { get; init; }

    /// <summary>
    /// OPTIONAL. Return only child documents of the doc with this id, if there are any. Can be "null" for retrieving the root docs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentDocId")]
    public string? ParentDocId { get; init; }

    /// <summary>
    /// OPTIONAL. which type of search to use; default is word-based
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeArchbeePublicDocumentsApi? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
