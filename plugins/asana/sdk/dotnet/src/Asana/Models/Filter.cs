using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record Filter
{
    /// <summary>
    /// The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to <c>task</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the <c>resource_subtype</c> field on the resources themselves.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public string? ResourceSubtype { get; init; }

    /// <summary>
    /// The type of change on the <b>resource</b> to pass through the filter. For more information refer to <c>Event.action</c> in the <see href="/docs/tocS_Event">Event</see> schema. This can be one of <c>changed</c>, <c>added</c>, <c>removed</c>, <c>deleted</c>, and <c>undeleted</c> depending on the nature of what has occurred on the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    /// <summary>
    /// *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for <c>action</c> of type <c>changed</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<string>? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
