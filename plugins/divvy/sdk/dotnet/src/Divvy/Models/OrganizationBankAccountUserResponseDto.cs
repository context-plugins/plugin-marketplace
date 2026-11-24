using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Bank account user response.
/// </summary>
public record OrganizationBankAccountUserResponseDto
{
    /// <summary>
    /// BILL-generated ID of the bank account user. The value begins with <c>bau</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated ID of the bank account. The value begins with <c>bac</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountId")]
    public string? BankAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the user. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the bank account user is archived
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verificationStatus")]
    public OrganizationBankAccountUserStatus? VerificationStatus { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
