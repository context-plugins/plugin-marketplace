using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

public record FundingAccount1
{
    [JsonPropertyName("type")]
    public required FundingAccountTypeResponse Type { get; init; }

    /// <summary>
    /// BILL-generated ID of the selected payment funding type. For the <c>WALLET</c> type, the <c>id</c> is not required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
