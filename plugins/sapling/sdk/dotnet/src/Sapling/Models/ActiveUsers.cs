using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ActiveUsers
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anonymous")]
    public int? Anonymous { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logged_in")]
    public int? LoggedIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
