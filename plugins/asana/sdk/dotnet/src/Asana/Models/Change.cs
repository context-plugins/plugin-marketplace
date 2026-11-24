using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// Information about the type of change that has occurred. This field is only present when the value of the property <c>action</c>, describing the action taken on the <b>resource</b>, is <c>changed</c>.
/// </summary>
public record Change
{
    /// <summary>
    /// The name of the field that has changed in the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("field")]
    public string? Field { get; init; }

    /// <summary>
    /// The type of action taken on the <b>field</b> which has been changed.  This can be one of <c>changed</c>, <c>added</c>, or <c>removed</c> depending on the nature of the change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    /// <summary>
    /// *Conditional.* This property is only present when the <b>field's</b> <c>action</c> is <c>changed</c> _and_ the <c>new_value</c> is an Asana resource. This will be only the <c>gid</c> and <c>resource_type</c> of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with <see href="/docs/input-output-options">opt_fields</see>) when using the <see href="/docs/asana-events">Events</see> endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_value")]
    public object? NewValue { get; init; }

    /// <summary>
    /// *Conditional.* This property is only present when the <b>field's</b> <c>action</c> is <c>added</c> _and_ the <c>added_value</c> is an Asana resource. This will be only the <c>gid</c> and <c>resource_type</c> of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with <see href="/docs/input-output-options">opt_fields</see>) when using the <see href="/docs/asana-events">Events</see> endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added_value")]
    public object? AddedValue { get; init; }

    /// <summary>
    /// *Conditional.* This property is only present when the <b>field's</b> <c>action</c> is <c>removed</c> _and_ the <c>removed_value</c> is an Asana resource. This will be only the <c>gid</c> and <c>resource_type</c> of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with <see href="/docs/input-output-options">opt_fields</see>) when using the <see href="/docs/asana-events">Events</see> endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removed_value")]
    public object? RemovedValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
