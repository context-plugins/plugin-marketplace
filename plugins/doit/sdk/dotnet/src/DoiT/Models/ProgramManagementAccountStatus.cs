using System;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ProgramManagementAccountStatus
{
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    /// <summary>
    /// 12-digit AWS account ID of the program management account.
    /// </summary>
    [JsonPropertyName("accountId")]
    public required string AccountId { get; init; }

    [JsonPropertyName("iamStatus")]
    public required string IamStatus { get; init; }

    /// <summary>
    /// Present when <c>iamStatus</c> indicates drift. <c>null</c> when the deployed IAM matches expectations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iamDiff")]
    public IamDiff? IamDiff { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When this account's root record was last updated. <c>null</c> if never updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }
}
