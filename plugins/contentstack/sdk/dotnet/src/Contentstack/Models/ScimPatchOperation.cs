using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// A single SCIM PATCH operation.
/// </summary>
public record ScimPatchOperation
{
    /// <summary>
    /// The operation type.
    /// </summary>
    [JsonPropertyName("op")]
    public required Op Op { get; init; }

    /// <summary>
    /// The attribute path to target for the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// The value to apply for add or replace operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
