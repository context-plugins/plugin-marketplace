using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

/// <summary>
/// Base type for most resource objects. It defines the common <c>type</c> element that identifies an object's type. It also identifies the element as Swagger's <c>discriminator</c>.
/// </summary>
public record TreeEntry
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The path in the repository
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commit")]
    public Commit? Commit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
