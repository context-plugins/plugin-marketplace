using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record PhoneNumbers
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryPhone")]
    public string? PrimaryPhone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalPhones")]
    public IReadOnlyList<string>? AdditionalPhones { get; init; }
}
