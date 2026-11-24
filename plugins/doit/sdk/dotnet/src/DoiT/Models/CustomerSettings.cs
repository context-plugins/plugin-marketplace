using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Customer settings. Shared by the <c>getCustomer</c> response and the <c>updateCustomer</c> request body so a value is always read and written at the same path.
/// <para>
/// <c>currency</c> accepts only the listed codes; any other value is rejected with <c>400</c>. Unlike <c>urlSlug</c> and <c>allowedInviteDomains</c> it cannot be cleared - no value unsets it.
/// </para>
/// </summary>
public record CustomerSettings
{
    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Email domains allowed to self-invite into the customer. Updating this field requires the <c>UsersManager</c> permission in addition to <c>Settings</c>. An empty array clears the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedInviteDomains")]
    public IReadOnlyList<string>? AllowedInviteDomains { get; init; }

    /// <summary>
    /// Whether users of this customer are required to enroll in multi-factor authentication. A missing value is treated as <c>true</c>. Disabling this does not remove MFA enrollments existing users already have.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mfaRequired")]
    public bool? MfaRequired { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
