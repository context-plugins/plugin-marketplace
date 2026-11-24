using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreateSealRequest
{
    /// <summary>
    /// Base64 encoded bytes of the document.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Account name of the seal contract that should be used. If your company own more than one seal and the field account_name is not given or empty, then the first given seal for the API user will be used for sealing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_name")]
    public string? AccountName { get; init; }

    /// <summary>
    /// Title of the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_signature")]
    public object? VisualSignature { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
