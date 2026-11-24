using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UserDataEdgeDb
{
    /// <summary>
    /// Unique id to identify the user
    /// </summary>
    [JsonPropertyName("user_id")]
    public required string UserId { get; init; }

    /// <summary>
    /// User's email used to identify the user on the dashaboard / target audiences
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// User's name used to idenify the user on the dashaboard / target audiences
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// User's language in ISO 639-1 format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public IReadOnlyDictionary<string, string>? Language { get; init; }

    /// <summary>
    /// User's country in ISO 3166 alpha-2 format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public IReadOnlyDictionary<string, string>? Country { get; init; }

    /// <summary>
    /// User's custom data to target the user with, data will be logged to DevCycle for use in dashboard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customData")]
    public object? CustomData { get; init; }

    /// <summary>
    /// Date the user was last seen being used, Unix epoch timestamp format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSeenDate")]
    public double? LastSeenDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
