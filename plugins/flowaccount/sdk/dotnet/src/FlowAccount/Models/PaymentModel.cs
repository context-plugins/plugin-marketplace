using System;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record PaymentModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashRemarks")]
    public string? CashRemarks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeVat")]
    public double? ExcludeVat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashTax")]
    public int? CashTax { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCardNumber")]
    public string? CreditCardNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyVatRate")]
    public int? CompanyVatRate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("net")]
    public double? Net { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountNumber")]
    public string? BankAccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountId")]
    public long? BankAccountId { get; init; }

    /// <summary>
    /// 0 = None
    /// 1 = Cash
    /// 3 = Cheque
    /// 5 = Transfer
    /// 7 = CreditCard
    /// 9 = PushPay
    /// 11 = PettyCash
    /// 13 = Other
    /// 51 = TransferByKConnect
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentMethod")]
    public PaymentMethod? PaymentMethod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateNow")]
    public DateTimeOffset? DateNow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amountCollected")]
    public double? AmountCollected { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amountWithheld")]
    public double? AmountWithheld { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withholdingTax")]
    public double? WithholdingTax { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remarks")]
    public string? Remarks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferBankAccountId")]
    public int? TransferBankAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountCreditCardId")]
    public int? BankAccountCreditCardId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge")]
    public double? Charge { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeDate")]
    public DateTimeOffset? ChequeDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeNumber")]
    public string? ChequeNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeBankAccountId")]
    public string? ChequeBankAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCardBankAccountId")]
    public string? CreditCardBankAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remainingCollected")]
    public double? RemainingCollected { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remainingCollectedType")]
    public RemainingCollectedType? RemainingCollectedType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deductionAmount")]
    public double? DeductionAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentDeductionType")]
    public DeductionType? PaymentDeductionType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pettyCashName")]
    public string? PettyCashName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pettyCashId")]
    public long? PettyCashId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeId")]
    public long? ChequeId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCardId")]
    public long? CreditCardId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otherChannelId")]
    public long? OtherChannelId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeDepositDate")]
    public DateTimeOffset? ChequeDepositDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeDepositBankId")]
    public long? ChequeDepositBankId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chequeCashingDate")]
    public DateTimeOffset? ChequeCashingDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoCreateWithholdingTax")]
    public bool? AutoCreateWithholdingTax { get; init; }

    /// <summary>
    /// 1 = Salary
    /// 3 = Commission
    /// 5 = Licensing
    /// 7 = Interest
    /// 9 = NetProfit30
    /// 11 = NetProfit25
    /// 13 = NetProfit20
    /// 15 = NetProfitOther
    /// 17 = TaxExemption
    /// 19 = DividenFromShareOfProfit
    /// 21 = PortionOfNetProfit
    /// 23 = RecognitionOfProfit
    /// 25 = TaxOther
    /// 27 = RevenueDepartmentTax
    /// 29 = Others
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withholdingTaxIncomeType")]
    public IncomeType? WithholdingTaxIncomeType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withholdingTaxIncomeDescription")]
    public string? WithholdingTaxIncomeDescription { get; init; }

    /// <summary>
    /// 1 = PND3
    /// 3 = PND53
    /// 5 = PND1K
    /// 7 = PND1KSpecial
    /// 9 = PND2
    /// 11 = PND2K
    /// 13 = PND3K
    /// 15 = PND1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withholdingTaxEntity")]
    public Entity? WithholdingTaxEntity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRateFee")]
    public double? ExchangeRateFee { get; init; }
}
