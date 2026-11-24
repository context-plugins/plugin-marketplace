using System.Text.Json.Serialization;
using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Models;

public record DocRequest1
{
    /// <summary>
    /// markdown, MDX or JSON content used to update the document.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content contains JSX-style Archbee components (&lt;hint&gt;, &lt;CtaButton /&gt;, &lt;Tabs&gt;); directive-style components (:::hint{type="info"}) work in both markdown and mdx.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; }

    /// <summary>
    /// OPTIONAL, set the name of the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// OPTIONAL, set the description of the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// OPTIONAL, set the preview image URL of the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previewImgURL")]
    public string? PreviewImgUrl { get; init; }

    /// <summary>
    /// OPTIONAL, set the slug (url key) of the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// OPTIONAL, set the url alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alias")]
    public string? Alias { get; init; }

    /// <summary>
    /// OPTIONAL, set the conditional rule id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditionalRuleId")]
    public string? ConditionalRuleId { get; init; }

    /// <summary>
    /// OPTIONAL. Specify the type of ordering for document insertion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sorting")]
    public Sorting? Sorting { get; init; }

    /// <summary>
    /// OPTIONAL, set document as hidden or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hidden")]
    public bool? Hidden { get; init; }

    /// <summary>
    /// OPTIONAL, document id. If present and valid, the doc will be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docId")]
    public string? DocId { get; init; }

    /// <summary>
    /// OPTIONAL, parent document id. If present and valid, the parent docId will be updated. If sent empty, the document will be moved to the root of the tree.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentDocId")]
    public string? ParentDocId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
