using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record RenderBundleEdit
{
    /// <summary>
    /// Exact text to find in the CURRENT stored bundle (fetch it via getCustomViewAuthoring first — it may have been hand-edited). Must match exactly once unless <c>replaceAll</c> is true; include enough surrounding context to make it unique.
    /// </summary>
    [JsonPropertyName("oldText")]
    public required string OldText { get; init; }

    /// <summary>
    /// Replacement text. May be empty to delete the matched text.
    /// </summary>
    [JsonPropertyName("newText")]
    public required string NewText { get; init; }

    /// <summary>
    /// Replace every occurrence instead of requiring a unique match (e.g. renaming a variable or color). Default false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replaceAll")]
    public bool? ReplaceAll { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
