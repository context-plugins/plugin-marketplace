using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Core.Validation;
using Asana.Core.Validation.Attributes;

namespace Asana.Models;

public record WebhookCompact
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
    /// If true, the webhook will send events - if false it is considered inactive and will not generate events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public AsanaNamedResource? Resource { get; init; }

    /// <summary>
    /// The URL to receive the HTTP POST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    [Format(FormatKind.Uri)]
    public string? Target { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
