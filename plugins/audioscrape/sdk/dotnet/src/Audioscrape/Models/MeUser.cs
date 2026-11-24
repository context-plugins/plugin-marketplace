using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record MeUser
{
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// ISO-8601 UTC timestamp of account creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("member_since")]
    public string? MemberSince { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
