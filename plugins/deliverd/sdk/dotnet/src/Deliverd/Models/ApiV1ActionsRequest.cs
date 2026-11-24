using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ActionsRequest
{
    /// <summary>
    /// Dotted, lowercase, stable: <c>finance.refund</c>. Policy is written against this name
    /// </summary>
    [JsonPropertyName("actionId")]
    [MaxLength(120)]
    [RegularExpression("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")]
    public required string ActionId { get; init; }

    /// <summary>
    /// What this does, as an approver will read it in a list
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// What it means and when it is used, for whoever writes the policy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// A JSON Schema object over the action's named arguments. A small subset: type/properties/required, fields of string, number, integer or boolean, with enum, minimum, maximum, minLength, maxLength and pattern. Anything else is refused rather than ignored
    /// </summary>
    [JsonPropertyName("inputSchema")]
    public required IReadOnlyDictionary<string, object> InputSchema { get; init; }

    /// <summary>
    /// Fields an approver may correct before approving. Omit for approve-or-reject only
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("editableFields")]
    public IReadOnlyList<string>? EditableFields { get; init; }

    /// <summary>
    /// The approval headline, templated over the input: <c>Refund {{amount}} {{currency}}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayTitle")]
    [MaxLength(200)]
    public string? DisplayTitle { get; init; }

    /// <summary>
    /// What kind of harm this risks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskCategory")]
    public RiskCategory? RiskCategory { get; init; }

    /// <summary>
    /// The urgency an approval inherits when the caller declares none
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultRisk")]
    public DefaultRisk? DefaultRisk { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
