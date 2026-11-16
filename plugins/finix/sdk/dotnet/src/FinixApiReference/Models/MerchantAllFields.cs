using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantAllFields
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> if you want to enable partial authorizations for a specific <c>Merchant</c>.</description></item>
    ///   <item><description>Partial authorizations enable the <c>Merchant</c> to collect a portion of the amount if the cardholder doesn't have the funds to cover the entire amount on their card.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_partial_authorization_enabled")]
    public bool? DefaultPartialAuthorizationEnabled { get; init; } = false;

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

    /// <summary>
    /// A value of <c>true</c> disables refunds for the <c>Merchant</c>, including both referenced and unreferenced refunds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refunds_disabled")]
    public bool? RefundsDisabled { get; init; } = false;

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
