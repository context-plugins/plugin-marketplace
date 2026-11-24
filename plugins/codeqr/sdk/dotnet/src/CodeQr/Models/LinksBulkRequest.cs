using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.AnyOf;

namespace CodeQr.Models;

public record LinksBulkRequest
{
    /// <summary>
    /// The destination URL of the short link.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The domain of the short link. If not provided, the main domain of the project will be used (or <c>codeqr.link</c> if the project has no domains).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// The slug of the short link. If not provided, a random 7-character slug will be generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// This is the ID of the link in your database. If set, it can be used to identify the link in the future. Must be prefixed with <c>ext_</c> when passed as a query parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [StringLength(255, MinimumLength = 1)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The prefix of the short link slug for randomly generated keys (for example, if the prefix is <c>/c/</c>, the generated keys will be in the format <c>/c/:key</c>). Will be ignored if <c>key</c> is provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefix")]
    public string? Prefix { get; init; }

    /// <summary>
    /// Whether to track conversions for the short link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trackConversion")]
    public bool? TrackConversion { get; init; } = false;

    /// <summary>
    /// Whether this link should be used as a reusable template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useAsTemplate")]
    public bool? UseAsTemplate { get; init; } = false;

    /// <summary>
    /// Whether the short link is archived.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; } = false;

    /// <summary>
    /// The date and time when the short link will expire in ISO-8601 format. Must be in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// The URL to redirect to when the short link expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiredUrl")]
    public string? ExpiredUrl { get; init; }

    /// <summary>
    /// The password required to access the short link destination URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Whether the short link uses the custom link preview feature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxy")]
    public bool? Proxy { get; init; } = false;

    /// <summary>
    /// The title of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The description of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The image of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public string? Image { get; init; }

    /// <summary>
    /// The video of the short link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("video")]
    public string? Video { get; init; }

    /// <summary>
    /// Whether the short link uses link cloaking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite")]
    public bool? Rewrite { get; init; } = false;

    /// <summary>
    /// The iOS destination URL for the short link for iOS device targeting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ios")]
    public string? Ios { get; init; }

    /// <summary>
    /// The Android destination URL for the short link for Android device targeting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("android")]
    public string? Android { get; init; }

    /// <summary>
    /// Geographic targeting information for the short link in JSON format <c>{[COUNTRY]: https://example.com }</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    public Geo? Geo { get; init; }

    /// <summary>
    /// Smart rules for conditional destination routing by request attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    [MaxLength(20)]
    public IReadOnlyList<Rule1>? Rules { get; init; }

    /// <summary>
    /// Allow search engines to index your short link. Default is <c>false</c> if not provided. Learn more: https://codeqr.link/noindex
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doIndex")]
    public bool? DoIndex { get; init; } = false;

    /// <summary>
    /// An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookIds")]
    public IReadOnlyList<string>? WebhookIds { get; init; }

    /// <summary>
    /// Whether the short link statistics are publicly accessible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicStats")]
    public bool? PublicStats { get; init; } = false;

    /// <summary>
    /// The unique ID of the tag assigned to the short link. This field is deprecated – use <c>tagIds</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagId")]
    public string? TagId { get; init; }

    /// <summary>
    /// The unique IDs of the tags assigned to the short link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagIds")]
    public TagIds? TagIds { get; init; }

    /// <summary>
    /// The unique name of the tags assigned to the short link (case insensitive).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagNames")]
    public TagNames? TagNames { get; init; }

    /// <summary>
    /// The unique ID existing folder to assign the short link to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; }

    /// <summary>
    /// The comments for the short link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public string? Comments { get; init; }

    /// <summary>
    /// Whether the short link is flexible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flexible")]
    public bool? Flexible { get; init; } = false;

    /// <summary>
    /// Whether the short link has pre-redirection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preRedirection")]
    public bool? PreRedirection { get; init; } = false;

    /// <summary>
    /// The ID of the page to redirect to before the link destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageId")]
    public string? PageId { get; init; }

    /// <summary>
    /// The URL of the page to redirect to before the link destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageUrl")]
    public string? PageUrl { get; init; }

    /// <summary>
    /// If the form is mandatory for the page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isFormMandatory")]
    public bool? IsFormMandatory { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
