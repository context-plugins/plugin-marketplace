using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// The type Auto Pay dto. (CONTROLLER)
/// </summary>
public record AutoPayDto
{
    /// <summary>
    /// Set as <c>true</c> if the vendor auto-pay is enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// BILL-generated ID of the organization bank account used to set up vendor auto-pay. The value begins with <c>bac</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountId")]
    public string? BankAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the user that set up vendor auto-pay. The value begins with <c>006</c>.
    /// <para>
    /// You can retrieve your user ID when you sign in with <c>/v3/login</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// Maximum bill amount for which vendor auto-pay is enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAmount")]
    public double? MaxAmount { get; init; }

    /// <summary>
    /// Number of days before the bill payment due date.
    /// <para>
    /// For example, if <c>dueBeforeDueDate</c> is <c>3</c>, BILL submits the vendor payment 3 days before the bill payment due date.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysBeforeDueDate")]
    [Minimum(0)]
    [Maximum(60)]
    public int? DaysBeforeDueDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
