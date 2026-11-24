using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1ReportsRollbackRequest
{
    /// <summary>
    /// Version number to restore
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    [ExclusiveMinimum(0)]
    public int? Version { get; init; }

    /// <summary>
    /// Version id, if you have it instead of the number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionId")]
    public Guid? VersionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
