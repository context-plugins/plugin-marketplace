using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A collection of rich text that will be displayed as a preview to another app.
/// <para>
/// This is read-only except for a small group of whitelisted apps.
/// </para>
/// </summary>
public record Preview
{
    /// <summary>
    /// Some fallback text to display if unable to display the full preview.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallback")]
    public string? Fallback { get; init; }

    /// <summary>
    /// Text to display in the footer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("footer")]
    public string? Footer { get; init; }

    /// <summary>
    /// Text to display in the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header")]
    public string? Header { get; init; }

    /// <summary>
    /// Where the header will link to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header_link")]
    public string? HeaderLink { get; init; }

    /// <summary>
    /// HTML formatted text for the body of the preview.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_text")]
    public string? HtmlText { get; init; }

    /// <summary>
    /// Text for the body of the preview.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// Text to display as the title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Where to title will link to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title_link")]
    public string? TitleLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
