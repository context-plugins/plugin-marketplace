using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record AddCustomFieldSettingRequest
{
    /// <summary>
    /// The custom field to associate with this container.
    /// </summary>
    [JsonPropertyName("custom_field")]
    public required string CustomField { get; init; }

    /// <summary>
    /// Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_important")]
    public bool? IsImportant { get; init; }

    /// <summary>
    /// A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
