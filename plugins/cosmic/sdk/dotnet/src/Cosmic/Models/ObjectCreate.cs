using System.Text.Json.Serialization;
using Cosmic.Models.AnyOf;
using Cosmic.Models.Enums;

namespace Cosmic.Models;

public record ObjectCreate
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Object type slug. The type must already exist.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Derived from <c>title</c> when omitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Values of the Metafields defined on the Object type, keyed by Metafield <c>key</c>.
    /// <para>
    /// The value shape follows the Metafield type, and differs between write and read for two of them:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Text, textarea, markdown, and HTML Metafields are strings. Number Metafields are numbers, switches are booleans, dates are ISO 8601 strings.</description></item>
    ///   <item><description>Object Relationship Metafields are written as an Object <c>id</c> string (or an array of ids for the multiple variant) and returned as a nested Object (or array of Objects) once <c>depth</c> is at least 1.</description></item>
    ///   <item><description>File and Image Metafields are written as a media <c>name</c> string (or an array of names) and returned as an object with <c>url</c> and <c>imgix_url</c>, plus <c>alt_text</c>, <c>width</c>, and <c>height</c> when requested via <c>props</c>.</description></item>
    ///   <item><description>Repeater Metafields are arrays of objects keyed by the child Metafield keys.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// Media <c>name</c>. The media must already exist in the Bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    public string? Thumbnail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public string? Locale { get; init; }

    /// <summary>
    /// UNIX millisecond timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_at")]
    public PublishAt1? PublishAt { get; init; }

    /// <summary>
    /// UNIX millisecond timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unpublish_at")]
    public UnpublishAt1? UnpublishAt { get; init; }

    /// <summary>
    /// Fire the corresponding Object webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_webhook")]
    public bool? TriggerWebhook { get; init; }
}
