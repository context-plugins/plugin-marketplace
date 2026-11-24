using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

/// <summary>
/// Either companyName or companyWebsite is mandatory
/// </summary>
public record DiscoveryAccount
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyWebsite")]
    public string? CompanyWebsite { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companylinkedinUrl")]
    public string? CompanylinkedinUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
