using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1ReportsSendRequest
{
    [JsonPropertyName("to")]
    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<string> To { get; init; }

    /// <summary>
    /// A covering note, shown above the link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(2000)]
    public string? Message { get; init; }

    /// <summary>
    /// Let recipients comment back. True when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowComments")]
    public bool? AllowComments { get; init; }

    /// <summary>
    /// Revoke their access automatically after this long
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresInDays")]
    [Minimum(1)]
    [Maximum(365)]
    public int? ExpiresInDays { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
