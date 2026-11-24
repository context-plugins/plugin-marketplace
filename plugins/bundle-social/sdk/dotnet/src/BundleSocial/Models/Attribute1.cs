using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record Attribute1
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<object>? Values { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repeatedEnumValue")]
    public RepeatedEnumValue? RepeatedEnumValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uriValues")]
    public IReadOnlyList<UriValue1>? UriValues { get; init; }
}
