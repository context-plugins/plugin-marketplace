using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record SupportV1TicketsRequest
{
    /// <summary>
    /// The status to set on the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusDoiTSupportRequestsApi? Status { get; init; }

    /// <summary>
    /// Email of the DoiT employee to assign the request to,
    /// resolved to a Zendesk agent. DoiT employees only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignee")]
    [Format(FormatKind.Email)]
    public string? Assignee { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
