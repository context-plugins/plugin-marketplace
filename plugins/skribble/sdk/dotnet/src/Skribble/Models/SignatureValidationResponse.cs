using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record SignatureValidationResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valid")]
    public bool? Valid { get; init; }

    /// <summary>
    /// Number of signatures found
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signatures")]
    public int? Signatures { get; init; }

    /// <summary>
    /// Number of valid signatures found
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validSignatures")]
    public int? ValidSignatures { get; init; }

    /// <summary>
    /// Highest signature quality found
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quality")]
    public string? Quality { get; init; }

    /// <summary>
    /// Identified legislation (CH, EU, CH-EU, WORLD)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legislation")]
    public string? Legislation { get; init; }

    /// <summary>
    /// All signatures are provided with long-term validation information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("longTermValidation")]
    public bool? LongTermValidation { get; init; }

    /// <summary>
    /// (Optional) Additional information details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfos")]
    public OptionalValidationInfos1? AdditionalInfos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
