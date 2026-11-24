using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record WithdrawSignatureRequest
{
    /// <summary>
    /// Withdraw message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [StringLength(2048, MinimumLength = 0)]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
