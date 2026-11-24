using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LookalikeCompanyResult
{
    [JsonPropertyName("domain")]
    public required string? Domain { get; init; }

    [JsonPropertyName("linkedinUrl")]
    public required string? LinkedinUrl { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("employeeCount")]
    public required int? EmployeeCount { get; init; }

    [JsonPropertyName("industry")]
    public required string? Industry { get; init; }

    [JsonPropertyName("location")]
    public required Location2 Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
