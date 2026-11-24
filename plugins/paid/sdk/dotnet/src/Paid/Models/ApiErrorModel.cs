using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// An API error response from the Paid API
/// </summary>
public record ApiErrorModel
{
    /// <summary>
    /// A human-readable message providing more details about the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
