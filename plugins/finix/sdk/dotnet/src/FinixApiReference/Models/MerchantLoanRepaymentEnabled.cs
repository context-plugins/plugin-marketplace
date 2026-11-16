using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantLoanRepaymentEnabled
{
    /// <summary>
    /// Set to <c>true</c> to enable the <c>Merchant</c> to process debt loan repayment. Only MCCs <c>6012</c> and <c>6051</c> are eligible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loan_repayment")]
    public bool? LoanRepayment { get; init; } = false;

    /// <summary>
    /// Set the acquiring processor. Use <c>DUMMY_V1</c> or <c>null</c> for your Sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
    /// </summary>
    [JsonPropertyName("processor")]
    public required ProcessorRequest Processor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
