using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PlaybooksApprovalRequest
{
    /// <summary>
    /// Emails, names or groups; the organisation's administrators when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvers")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Approvers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(2000)]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
