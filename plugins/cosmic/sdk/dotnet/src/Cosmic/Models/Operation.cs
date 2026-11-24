using System.Text.Json.Serialization;
using Cosmic.Core.Models;
using Cosmic.Models.Enums;

namespace Cosmic.Models;

public record Operation
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public Method? Method { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status3? Status { get; init; }

    /// <summary>
    /// A single piece of content. Which properties are present depends on <c>props</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object")]
    public ObjectModel? Object { get; init; }

    /// <summary>
    /// Present on deletes and on failures.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
