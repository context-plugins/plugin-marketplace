using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import.
/// </summary>
public record CloudflowBundleRequirements
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    [MaxLength(50)]
    public IReadOnlyList<Connection>? Connections { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastoreTables")]
    [MaxLength(50)]
    public IReadOnlyList<DatastoreTable>? DatastoreTables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("globalVariables")]
    [MaxLength(50)]
    public IReadOnlyList<GlobalVariable>? GlobalVariables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
