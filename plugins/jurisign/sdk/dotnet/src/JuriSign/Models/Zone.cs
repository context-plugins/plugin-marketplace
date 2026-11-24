using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record Zone
{
    /// <summary>
    /// Index in the signers array (0-based)
    /// </summary>
    [JsonPropertyName("signer_index")]
    [Minimum(0)]
    public required int SignerIndex { get; init; }

    /// <summary>
    /// Page number
    /// </summary>
    [JsonPropertyName("page")]
    [Minimum(1)]
    public required int Page { get; init; }

    /// <summary>
    /// X position (% from left)
    /// </summary>
    [JsonPropertyName("x")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public required double X { get; init; }

    /// <summary>
    /// Y position (% from top)
    /// </summary>
    [JsonPropertyName("y")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public required double Y { get; init; }

    /// <summary>
    /// Width (% of page)
    /// </summary>
    [JsonPropertyName("width")]
    [Minimum(1.0)]
    [Maximum(100.0)]
    public required double Width { get; init; }

    /// <summary>
    /// Height (% of page)
    /// </summary>
    [JsonPropertyName("height")]
    [Minimum(1.0)]
    [Maximum(100.0)]
    public required double Height { get; init; }

    /// <summary>
    /// Field type. 'date' is always auto-filled at signing time, never editable by the signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; } = TypeEnum.Signature;

    /// <summary>
    /// Instruction shown to the signer. Required when type is 'text' or 'checkbox'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    [MaxLength(255)]
    public string? Label { get; init; }

    /// <summary>
    /// For 'text'/'checkbox' zones only: blocks signing until filled. Ignored for 'signature'/'date'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
