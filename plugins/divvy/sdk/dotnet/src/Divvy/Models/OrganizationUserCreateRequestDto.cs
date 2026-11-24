using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a user
/// </summary>
public record OrganizationUserCreateRequestDto
{
    /// <summary>
    /// User first name
    /// </summary>
    [JsonPropertyName("firstName")]
    [StringLength(100, MinimumLength = 1)]
    public required string FirstName { get; init; }

    /// <summary>
    /// User last name
    /// </summary>
    [JsonPropertyName("lastName")]
    [StringLength(100, MinimumLength = 1)]
    public required string LastName { get; init; }

    /// <summary>
    /// User email address
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    /// <summary>
    /// BILL-generated ID of the user role. The value begins with <c>0po</c>.
    /// <para>
    /// If you do not set <c>roleId</c>, the default <c>ADMINISTRATOR</c> user role is assigned to the created user. You can get the list of available user roles with <c>GET /v3/roles</c>.
    /// </para>
    /// </summary>
    [JsonPropertyName("roleId")]
    [MinLength(1)]
    public required string RoleId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the user accepts the BILL terms of service
    /// </summary>
    [JsonPropertyName("acceptTermsOfService")]
    public required bool AcceptTermsOfService { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
