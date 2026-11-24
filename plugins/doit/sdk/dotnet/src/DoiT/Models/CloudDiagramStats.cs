using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Diagram with activity stats for a given time period.
/// </summary>
public record CloudDiagramStats
{
    /// <summary>
    /// ID of the diagram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_id")]
    public string? Id { get; init; }

    /// <summary>
    /// ID of the layer the diagram belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ss_id")]
    public string? SsId { get; init; }

    /// <summary>
    /// Name of the diagram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Type of the diagram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type7? Type { get; init; }

    /// <summary>
    /// Cloud account name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_name")]
    public string? AccountName { get; init; }

    /// <summary>
    /// Cloud account ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_id")]
    public string? AccountId { get; init; }

    /// <summary>
    /// Cloud account type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_type")]
    public string? AccountType { get; init; }

    /// <summary>
    /// Activity changes within the period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changes")]
    public IReadOnlyList<CloudDiagramStatsChange>? Changes { get; init; }

    /// <summary>
    /// Current import/sync state for a cloud-connected diagram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("import")]
    public CloudDiagramImportState? Import { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
