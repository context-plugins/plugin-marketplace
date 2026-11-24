using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record EndCustomerMappingResult
{
    [JsonPropertyName("ecAccountId")]
    public required string EcAccountId { get; init; }

    [JsonPropertyName("ecCustomerId")]
    public required string EcCustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curBasePath")]
    public string? CurBasePath { get; init; }

    [JsonPropertyName("status")]
    public required EndCustomerMappingResultStatus Status { get; init; }
}
