using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record DeviceConfiguration
{
    /// <summary>
    /// Receipt delivery methods that are automatically triggered after a transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("automatic_receipt_delivery_methods")]
    public IReadOnlyList<string>? AutomaticReceiptDeliveryMethods { get; init; }

    /// <summary>
    /// Receipt delivery methods available for the buyer to select on the device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_receipt_methods")]
    public IReadOnlyList<string>? AvailableReceiptMethods { get; init; }

    /// <summary>
    /// Enable processing of transactions through Debit rails. If set to <c>false</c>, Debit card transactions will instead be processed through Credit rails. <c>DATACAP_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow_debit")]
    public bool? AllowDebit { get; init; } = true;

    /// <summary>
    /// Sets whether the device allows initialization authorizations on its interface.<c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow_standalone_authorizations")]
    public bool? AllowStandaloneAuthorizations { get; init; } = false;

    /// <summary>
    /// Sets whether the device allows initialization refunds on its interface. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow_standalone_refunds")]
    public bool? AllowStandaloneRefunds { get; init; } = false;

    /// <summary>
    /// Sets whether the device allows initialization sales on its interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow_standalone_sales")]
    public bool? AllowStandaloneSales { get; init; } = false;

    /// <summary>
    /// Sets whether or not the device will be used to capture transactions. This field should be set to <c>true</c> unless there are special circumstances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bypass_device_on_capture")]
    public bool? BypassDeviceOnCapture { get; init; } = false;

    /// <summary>
    /// Sets if the device will check for duplicate transactions. <c>DATACAP_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("check_for_duplicate_transactions")]
    public bool? CheckForDuplicateTransactions { get; init; }

    /// <summary>
    /// Sets whether the device will display the blank tip amount on the receipt for authorizations to be later captured. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_tip_on_receipt")]
    public bool? DisplayTipOnReceipt { get; init; } = false;

    /// <summary>
    /// The ID of the file to be displayed on the device when it is idle. Passing a value of <c>null</c> resets the device's idle image to the default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_image_file_id")]
    public string? IdleImageFileId { get; init; }

    /// <summary>
    /// Sets the idle message text on the terminal. This is what will be presented on the welcome screen. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_message")]
    public string? IdleMessage { get; init; }

    /// <summary>
    /// Sets if the cardholder needs to confirm the amount they'll pay. <c>DATACAP_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_amount_confirmation")]
    public bool? PromptAmountConfirmation { get; init; } = true;

    /// <summary>
    /// Determines when the terminal prompts for an e-signature.
    /// <list type="bullet">
    ///   <item><description><c>ALWAYS</c>: The terminal will always request an e-signature.</description></item>
    ///   <item><description><c>NEVER</c>: The terminal will never request an e-signature.</description></item>
    ///   <item><description><c>ON_NETWORK_RECOMMENDATION</c>: The terminal follows card network recommendations on whether to prompt for a signature.</description></item>
    ///   <item><description><c>ON_THRESHOLD_AMOUNT</c>: The terminal requests an e-signature only when the transaction amount is greater than or equal to <c>signature_threshold_amount</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_for_signature")]
    public PromptForSignature? PromptForSignature { get; init; }

    /// <summary>
    /// Sets if the device allows for manual entry as a card input method. <c>DATACAP_V1</c> and <c>FINIX_V1</c> only. On <c>DATACAP_V1</c> if this is set to true manual entry will be the default entry option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_manual_entry")]
    public bool? PromptManualEntry { get; init; } = false;

    /// <summary>
    /// Sets whether or not the device presents a screen prompting the buyer to print receipt at the end of the transaction flow. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_receipt_confirmation")]
    public bool? PromptReceiptConfirmation { get; init; } = true;

    /// <summary>
    /// Sets whether the device prints a tip line on the receipt for the buyer to fill in manually.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_tip_on_receipt")]
    public bool? PromptTipOnReceipt { get; init; } = false;

    /// <summary>
    /// Sets whether the device will display the suggested tipping screen. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_tip_on_screen")]
    public bool? PromptTipOnScreen { get; init; } = false;

    /// <summary>
    /// The transaction amount at which the terminal prompts for an e-signature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature_threshold_amount")]
    public object? SignatureThresholdAmount { get; init; }

    /// <summary>
    /// Represents the transaction amount that a <c>Merchant</c> charges the buyer when creating a <c>Transfer</c> or an <c>Authorization</c>. The value cannot exceed <c>300</c> (i.e., 3%). For devices on Standalone Mode, the Finix Payment Application on the terminal will calculate and send a <c>Transfer</c> or an <c>Authorization</c> request with the surcharge added. Customers integrated directly into Finix API must contact Support to incorporate surcharging appropriately into their integration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surcharge_basis_points")]
    [Maximum(300)]
    public int? SurchargeBasisPoints { get; init; } = 0;

    /// <summary>
    /// An object that sets the configurations for the tipping page if it appears. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tipping_details")]
    public TippingDetails? TippingDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
