using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Lusha.Models;

public record ContactIdentifiersBatch2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrls")]
    [MaxLength(100)]
    public IReadOnlyList<string>? LinkedinUrls { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contacts")]
    [MaxLength(100)]
    public IReadOnlyList<ContactItem2>? Contacts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    [MaxLength(100)]
    public IReadOnlyList<string>? Emails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactIds")]
    [MaxLength(100)]
    public IReadOnlyList<int>? ContactIds { get; init; }
}
