using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Data4
{
    /// <summary>
    /// The best source on file (lowest priority value), with the same fields as a <c>sources</c> row. Null when no public record names a management company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("best")]
    public object? Best { get; init; }

    /// <summary>
    /// Every source, best first: manager_name, source, priority (lower is stronger), provenance, inferred (true when we matched the firm, for example by a licensed firm's office or email domain, rather than a filing naming it), and manager_org_id (the firm's Common Elements org id where the source links one, else null).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<object>? Sources { get; init; }

    /// <summary>
    /// The same rows as <c>sources</c>, kept for existing integrations. Best first.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managers")]
    public IReadOnlyList<object>? Managers { get; init; }

    /// <summary>
    /// Platform-confirmed management edges: to_org_id (the management company's org id), relationship_type ("managed_by"), status, start_date, end_date, contract_value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confirmed_relationships")]
    public IReadOnlyList<object>? ConfirmedRelationships { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
