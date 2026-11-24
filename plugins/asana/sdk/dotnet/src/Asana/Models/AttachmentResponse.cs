using System;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Core.Validation;
using Asana.Core.Validation.Attributes;

namespace Asana.Models;

public record AttachmentResponse
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
    /// The name of the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The service hosting the attachment. Valid values are <c>asana</c>, <c>dropbox</c>, <c>gdrive</c>, <c>onedrive</c>, <c>box</c>, <c>vimeo</c>, and <c>external</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public string? ResourceSubtype { get; init; }

    /// <summary>
    /// The time at which this resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The URL containing the content of the attachment.
    /// *Note:* May be null if the attachment is hosted by <see href="https://www.box.com/">Box</see> and will be null if the attachment is a Video Message hosted by <see href="https://vimeo.com/">Vimeo</see>. If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("download_url")]
    [Format(FormatKind.Uri)]
    public string? DownloadUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permanent_url")]
    [Format(FormatKind.Uri)]
    public string? PermanentUrl { get; init; }

    /// <summary>
    /// The service hosting the attachment. Valid values are <c>asana</c>, <c>dropbox</c>, <c>gdrive</c>, <c>box</c>, and <c>vimeo</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public TaskCompact? Parent { get; init; }

    /// <summary>
    /// The size of the attachment in bytes. Only present when the <c>resource_subtype</c> is <c>asana</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; }

    /// <summary>
    /// The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("view_url")]
    [Format(FormatKind.Uri)]
    public string? ViewUrl { get; init; }

    /// <summary>
    /// Whether the attachment is connected to the app making the request for the purposes of showing an app components widget. Only present when the <c>resource_subtype</c> is <c>external</c> or <c>gdrive</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connected_to_app")]
    public bool? ConnectedToApp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
