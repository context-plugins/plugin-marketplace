using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

/// <summary>
/// A specific server error
/// </summary>
public record JsonSingleError
{
    /// <summary>
    /// A unique numeric code representing the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; }

    /// <summary>
    /// A unique string code representing the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codeName")]
    public string? CodeName { get; init; }

    /// <summary>
    /// Human readable description of the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Human readable description of the error, localized
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localizedMessage")]
    public string? LocalizedMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
