using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a user
/// </summary>
public record PartnerUserCreateRequestDto
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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    [MaxLength(100)]
    public string? LastName { get; init; }

    /// <summary>
    /// User email address
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    /// <summary>
    /// BILL-generated ID of the user role. The value begins with <c>0po</c>.
    /// <para>
    /// If you do not set <c>roleId</c>, the default <c>ADMINISTRATOR</c> user role is assigned to the created user. You can get the list of available user roles with <c>GET /v3/partner/roles</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleId")]
    public string? RoleId { get; init; }

    /// <summary>
    /// Username for signing in as the user.
    /// <para>
    /// Set <c>username</c> as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify each user.
    /// </para>
    /// </summary>
    [JsonPropertyName("username")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Username { get; init; }

    /// <summary>
    /// Reference ID used as an external identifier.
    /// <para>
    /// You can set this field as a unique alphanumeric value for your system to refer to the created user.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalReferenceId")]
    public string? ExternalReferenceId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the user accepts the BILL terms of service
    /// </summary>
    [JsonPropertyName("acceptTermsOfService")]
    public required bool AcceptTermsOfService { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
