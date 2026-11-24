using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SearchBulkContactsRequest
{
    /// <summary>
    /// This is a required parameter that should contain a list of contact objects. Each contact will be processed based on the provided contact details.
    /// </summary>
    [JsonPropertyName("contacts")]
    public required IReadOnlyList<ContactSearchBulk> Contacts { get; init; }

    /// <summary>
    /// Metadata for the search to filter the results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata2? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
