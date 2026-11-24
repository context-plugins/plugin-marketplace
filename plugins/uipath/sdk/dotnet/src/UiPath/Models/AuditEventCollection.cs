using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Collection of audit events with pagination links
/// </summary>
public record AuditEventCollection
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auditEvents")]
    public IReadOnlyList<AuditEvent>? AuditEvents { get; init; }

    /// <summary>
    /// URL to retrieve newer audit events relative to the current result set
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    [Format(FormatKind.Uri)]
    public string? Next { get; init; }

    /// <summary>
    /// URL to retrieve older audit events relative to the current result set
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous")]
    [Format(FormatKind.Uri)]
    public string? Previous { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
