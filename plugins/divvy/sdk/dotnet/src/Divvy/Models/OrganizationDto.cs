using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Organization response.
/// </summary>
public record OrganizationDto
{
    /// <summary>
    /// BILL-generated ID of the organization. The value begins with <c>008</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Organization name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// BILL-generated ID of the console organization. The value begins with <c>008</c>.
    /// <para>
    /// When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consoleOrganizationId")]
    public string? ConsoleOrganizationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
