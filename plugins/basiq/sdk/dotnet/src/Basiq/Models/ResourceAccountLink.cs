using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Link object containing a link to the resource, self reference.
/// </summary>
public record ResourceAccountLink
{
    /// <summary>
    /// URL of the resource.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// transactions link to the transactions associated with this account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactions")]
    public string? Transactions { get; init; }

    /// <summary>
    /// connection associated to User.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connection")]
    public string? Connection { get; init; }

    /// <summary>
    /// institution link to the institution associated with this account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("institution")]
    public string? Institution { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statements")]
    public string? Statements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
