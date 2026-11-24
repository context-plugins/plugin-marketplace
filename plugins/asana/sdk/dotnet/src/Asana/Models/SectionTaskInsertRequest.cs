using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record SectionTaskInsertRequest
{
    /// <summary>
    /// The task to add to this section.
    /// </summary>
    [JsonPropertyName("task")]
    public required string Task { get; init; }

    /// <summary>
    /// An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
