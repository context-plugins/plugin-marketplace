using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record Reason
{
    /// <summary>
    /// The text as it was typed by a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public string? Raw { get; init; }

    /// <summary>
    /// The type of markup language the raw content is to be interpreted in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markup")]
    public Markup? Markup { get; init; }

    /// <summary>
    /// The user's content rendered as HTML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public string? Html { get; init; }
}
