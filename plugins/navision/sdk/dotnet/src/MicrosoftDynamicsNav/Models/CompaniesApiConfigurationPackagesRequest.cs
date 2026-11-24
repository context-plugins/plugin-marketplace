using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record CompaniesApiConfigurationPackagesRequest
{
    /// <summary>
    /// The configuration package code
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// The configuration package name
    /// </summary>
    [JsonPropertyName("packageName")]
    public required string PackageName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
