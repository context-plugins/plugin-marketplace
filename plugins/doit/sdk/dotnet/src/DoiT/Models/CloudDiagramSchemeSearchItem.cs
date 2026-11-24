using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A diagram layer (cloud account) matching the search query.
/// </summary>
public record CloudDiagramSchemeSearchItem
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Cloud account name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_name")]
    public string? AccountName { get; init; }

    /// <summary>
    /// Parent diagram ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme_id")]
    public string? SchemeId { get; init; }

    /// <summary>
    /// Layer ID (same as _id).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ss_id")]
    public string? SsId { get; init; }

    /// <summary>
    /// Parent diagram name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme")]
    public string? Scheme { get; init; }

    /// <summary>
    /// Import/sync status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Layer name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Component type — always "statussheet" for this category.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "statussheet";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
