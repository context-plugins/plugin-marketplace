using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Core.Validation;
using Fillo.Core.Validation.Attributes;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record ApiV1ManageMembersInvitesRequest
{
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Defaults to member.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public Role? Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
