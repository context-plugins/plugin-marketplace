using System.Collections.Generic;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record SingleEnrichmentRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("person")]
    public PersonInput? Person { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public CompanyInput? Company { get; init; }

    /// <summary>
    /// External identifier echoed back on the result. Not used for processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomField>? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
