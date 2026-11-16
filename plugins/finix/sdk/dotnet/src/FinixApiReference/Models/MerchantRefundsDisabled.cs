using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantRefundsDisabled
{
    /// <summary>
    /// Set the acquiring processor. Use <c>DUMMY_V1</c> or <c>null</c> for your Sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
    /// </summary>
    [JsonPropertyName("processor")]
    public required ProcessorRequest Processor { get; init; }

    /// <summary>
    /// A value of <c>true</c> disables refunds for the <c>Merchant</c>, including both referenced and unreferenced refunds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refunds_disabled")]
    public bool? RefundsDisabled { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
