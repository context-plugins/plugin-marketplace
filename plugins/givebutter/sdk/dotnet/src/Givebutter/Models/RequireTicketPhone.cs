using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Accepts a <c>boolean</c> value.
/// </summary>
public record RequireTicketPhone
{
    [JsonPropertyName("name")]
    public string Name { get; } = "require_ticket_phone";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public bool? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
