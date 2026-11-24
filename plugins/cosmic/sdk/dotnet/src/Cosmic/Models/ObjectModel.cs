using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;
using Cosmic.Models.AnyOf;
using Cosmic.Models.Enums;

namespace Cosmic.Models;

/// <summary>
/// A single piece of content. Which properties are present depends on <c>props</c>.
/// </summary>
public record ObjectModel
{
    /// <summary>
    /// Unique identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Object type slug.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Unique within the Object type. Localized versions of an Object share a slug and count as one Object against plan limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// HTML content. Deprecated in v3; use a Metafield instead.
    /// </summary>
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
    /// Bucket id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucket")]
    public string? Bucket { get; init; }

    /// <summary>
    /// Media <c>name</c> of the Object thumbnail. Returned as a URL on read.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// Locale code, when the Object type has localization enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public string? Locale { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// User id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public string? CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified_at")]
    public DateTimeOffset? ModifiedAt { get; init; }

    /// <summary>
    /// User id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified_by")]
    public string? ModifiedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published_at")]
    public DateTimeOffset? PublishedAt { get; init; }

    /// <summary>
    /// UNIX millisecond timestamp for scheduled publishing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_at")]
    public PublishAt? PublishAt { get; init; }

    /// <summary>
    /// UNIX millisecond timestamp for scheduled unpublishing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unpublish_at")]
    public UnpublishAt? UnpublishAt { get; init; }

    /// <summary>
    /// User id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assigned_to")]
    public string? AssignedTo { get; init; }

    /// <summary>
    /// User id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assigned_by")]
    public string? AssignedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assigned_at")]
    public DateTimeOffset? AssignedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
