using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

public record BasicAuth
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; } = Type1.BasicAuth;

    [JsonPropertyName("username")]
    [MinLength(1)]
    public required string Username { get; init; }

    [JsonPropertyName("password")]
    public required string Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
