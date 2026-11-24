using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FlowAccount.Core.Models;

namespace FlowAccount.Models;

public record User
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstname")]
    [StringLength(255, MinimumLength = 0)]
    public string? Firstname { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastname")]
    [StringLength(255, MinimumLength = 0)]
    public string? Lastname { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdon")]
    public DateTimeOffset? Createdon { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [StringLength(255, MinimumLength = 0)]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? PhoneNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobile")]
    [StringLength(100, MinimumLength = 0)]
    public string? Mobile { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referralCode")]
    [StringLength(50, MinimumLength = 0)]
    public string? ReferralCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
