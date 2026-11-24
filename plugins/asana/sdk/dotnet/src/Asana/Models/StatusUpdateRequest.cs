using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record StatusUpdateRequest
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The title of the status update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    /// The <c>resource_subtype</c>s for <c>status</c> objects represent the type of their parent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public ResourceSubtypeAsanaStatusUpdatesApi? ResourceSubtype { get; init; }

    /// <summary>
    /// The text content of the status update.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. The text content of the status update with formatting as HTML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_text")]
    public string? HtmlText { get; init; }

    /// <summary>
    /// The type associated with the status update. This represents the current state of the object this object is on.
    /// </summary>
    [JsonPropertyName("status_type")]
    public required StatusType StatusType { get; init; }

    [JsonPropertyName("parent")]
    public required string Parent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
