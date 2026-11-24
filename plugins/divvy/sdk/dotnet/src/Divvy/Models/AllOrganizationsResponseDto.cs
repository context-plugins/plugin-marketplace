using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Get list of organizations response.
/// </summary>
public record AllOrganizationsResponseDto
{
    /// <summary>
    /// List of organizations. When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizations")]
    public IReadOnlyList<OrganizationDto>? Organizations { get; init; }

    /// <summary>
    /// List of console organizations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consoleOrganizations")]
    public IReadOnlyList<ConsoleOrganization>? ConsoleOrganizations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
