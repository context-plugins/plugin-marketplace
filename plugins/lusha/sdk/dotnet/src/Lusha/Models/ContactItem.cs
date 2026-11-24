using System.Text.Json.Serialization;

namespace Lusha.Models;

/// <summary>
/// At least one of companyDomain or companyName is required.
/// </summary>
public record ContactItem
{
    [JsonPropertyName("firstName")]
    public required string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public required string LastName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyDomain")]
    public string? CompanyDomain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }
}
