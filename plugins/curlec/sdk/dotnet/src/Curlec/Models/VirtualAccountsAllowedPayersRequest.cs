using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record VirtualAccountsAllowedPayersRequest
{
    /// <summary>
    /// Type of allowed payer.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2RazorpayVirtualAccountsApi Type { get; init; }

    /// <summary>
    /// Required if type=bank_account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_account")]
    public BankAccount? BankAccount { get; init; }

    /// <summary>
    /// Required if type=vpa.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpa")]
    public Vpa? Vpa { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
