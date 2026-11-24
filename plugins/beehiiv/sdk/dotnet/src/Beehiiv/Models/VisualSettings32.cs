using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// Optional styling applied to the section as a whole (background color, padding, borders, etc.).
/// </summary>
public record VisualSettings32
{
    /// <summary>
    /// The background color of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background_color")]
    public string? BackgroundColor { get; init; }

    /// <summary>
    /// The text color of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text_color")]
    public string? TextColor { get; init; }

    /// <summary>
    /// The border color of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_color")]
    public string? BorderColor { get; init; }

    /// <summary>
    /// The border style of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_style")]
    public BorderStyle2? BorderStyle { get; init; }

    /// <summary>
    /// The border width of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_width")]
    public int? BorderWidth { get; init; }

    /// <summary>
    /// The border width of the top of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_width_top")]
    public int? BorderWidthTop { get; init; }

    /// <summary>
    /// The border width of the bottom of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_width_bottom")]
    public int? BorderWidthBottom { get; init; }

    /// <summary>
    /// The border width of the left of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_width_left")]
    public int? BorderWidthLeft { get; init; }

    /// <summary>
    /// The border width of the right of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_width_right")]
    public int? BorderWidthRight { get; init; }

    /// <summary>
    /// The border radius of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_radius")]
    public int? BorderRadius { get; init; }

    /// <summary>
    /// The border radius of the top left of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_radius_top_left")]
    public int? BorderRadiusTopLeft { get; init; }

    /// <summary>
    /// The border radius of the top right of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_radius_top_right")]
    public int? BorderRadiusTopRight { get; init; }

    /// <summary>
    /// The border radius of the bottom left of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_radius_bottom_left")]
    public int? BorderRadiusBottomLeft { get; init; }

    /// <summary>
    /// The border radius of the bottom right of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("border_radius_bottom_right")]
    public int? BorderRadiusBottomRight { get; init; }

    /// <summary>
    /// The inner spacing of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_spacing")]
    public int? InnerSpacing { get; init; }

    /// <summary>
    /// The inner spacing of the top of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_spacing_top")]
    public int? InnerSpacingTop { get; init; }

    /// <summary>
    /// The inner spacing of the bottom of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_spacing_bottom")]
    public int? InnerSpacingBottom { get; init; }

    /// <summary>
    /// The inner spacing of the left of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_spacing_left")]
    public int? InnerSpacingLeft { get; init; }

    /// <summary>
    /// The inner spacing of the right of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_spacing_right")]
    public int? InnerSpacingRight { get; init; }

    /// <summary>
    /// The outer spacing of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_spacing")]
    public int? OuterSpacing { get; init; }

    /// <summary>
    /// The outer spacing of the top of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_spacing_top")]
    public int? OuterSpacingTop { get; init; }

    /// <summary>
    /// The outer spacing of the bottom of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_spacing_bottom")]
    public int? OuterSpacingBottom { get; init; }

    /// <summary>
    /// The outer spacing of the left of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_spacing_left")]
    public int? OuterSpacingLeft { get; init; }

    /// <summary>
    /// The outer spacing of the right of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_spacing_right")]
    public int? OuterSpacingRight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
