using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PiiEntityType>))]
public sealed record PiiEntityType : OpenStringEnum<PiiEntityType>
{
    private PiiEntityType(string value) : base(value)
    {
    }

    public static readonly PiiEntityType BankAccountNumber = new("BANK_ACCOUNT_NUMBER");

    public static readonly PiiEntityType BankRouting = new("BANK_ROUTING");

    public static readonly PiiEntityType CreditDebitNumber = new("CREDIT_DEBIT_NUMBER");

    public static readonly PiiEntityType CreditDebitCvv = new("CREDIT_DEBIT_CVV");

    public static readonly PiiEntityType CreditDebitExpiry = new("CREDIT_DEBIT_EXPIRY");

    public static readonly PiiEntityType Pin = new("PIN");

    public static readonly PiiEntityType Email = new("EMAIL");

    public static readonly PiiEntityType Address = new("ADDRESS");

    public static readonly PiiEntityType Name = new("NAME");

    public static readonly PiiEntityType Phone = new("PHONE");

    public static readonly PiiEntityType Ssn = new("SSN");

    public static readonly PiiEntityType DateTime = new("DATE_TIME");

    public static readonly PiiEntityType PassportNumber = new("PASSPORT_NUMBER");

    public static readonly PiiEntityType DriverId = new("DRIVER_ID");

    public static readonly PiiEntityType Url = new("URL");

    public static readonly PiiEntityType Age = new("AGE");

    public static readonly PiiEntityType Username = new("USERNAME");

    public static readonly PiiEntityType Password = new("PASSWORD");

    public static readonly PiiEntityType AwsAccessKey = new("AWS_ACCESS_KEY");

    public static readonly PiiEntityType AwsSecretKey = new("AWS_SECRET_KEY");

    public static readonly PiiEntityType IpAddress = new("IP_ADDRESS");

    public static readonly PiiEntityType MacAddress = new("MAC_ADDRESS");

    public static readonly PiiEntityType LicensePlate = new("LICENSE_PLATE");

    public static readonly PiiEntityType VehicleIdentificationNumber = new("VEHICLE_IDENTIFICATION_NUMBER");

    public static readonly PiiEntityType UsIndividualTaxIdentificationNumber = new(
        "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER");

    public static readonly PiiEntityType CaHealthNumber = new("CA_HEALTH_NUMBER");

    public static readonly PiiEntityType CaSocialInsuranceNumber = new("CA_SOCIAL_INSURANCE_NUMBER");

    public static readonly PiiEntityType InternationalBankAccountNumber = new("INTERNATIONAL_BANK_ACCOUNT_NUMBER");

    public static readonly PiiEntityType SwiftCode = new("SWIFT_CODE");

    public static readonly PiiEntityType All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onBankAccountNumber,
        Func<TResult> onBankRouting,
        Func<TResult> onCreditDebitNumber,
        Func<TResult> onCreditDebitCvv,
        Func<TResult> onCreditDebitExpiry,
        Func<TResult> onPin,
        Func<TResult> onEmail,
        Func<TResult> onAddress,
        Func<TResult> onName,
        Func<TResult> onPhone,
        Func<TResult> onSsn,
        Func<TResult> onDateTime,
        Func<TResult> onPassportNumber,
        Func<TResult> onDriverId,
        Func<TResult> onUrl,
        Func<TResult> onAge,
        Func<TResult> onUsername,
        Func<TResult> onPassword,
        Func<TResult> onAwsAccessKey,
        Func<TResult> onAwsSecretKey,
        Func<TResult> onIpAddress,
        Func<TResult> onMacAddress,
        Func<TResult> onLicensePlate,
        Func<TResult> onVehicleIdentificationNumber,
        Func<TResult> onUsIndividualTaxIdentificationNumber,
        Func<TResult> onCaHealthNumber,
        Func<TResult> onCaSocialInsuranceNumber,
        Func<TResult> onInternationalBankAccountNumber,
        Func<TResult> onSwiftCode,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccountNumber => onBankAccountNumber(),
            _ when this == BankRouting => onBankRouting(),
            _ when this == CreditDebitNumber => onCreditDebitNumber(),
            _ when this == CreditDebitCvv => onCreditDebitCvv(),
            _ when this == CreditDebitExpiry => onCreditDebitExpiry(),
            _ when this == Pin => onPin(),
            _ when this == Email => onEmail(),
            _ when this == Address => onAddress(),
            _ when this == Name => onName(),
            _ when this == Phone => onPhone(),
            _ when this == Ssn => onSsn(),
            _ when this == DateTime => onDateTime(),
            _ when this == PassportNumber => onPassportNumber(),
            _ when this == DriverId => onDriverId(),
            _ when this == Url => onUrl(),
            _ when this == Age => onAge(),
            _ when this == Username => onUsername(),
            _ when this == Password => onPassword(),
            _ when this == AwsAccessKey => onAwsAccessKey(),
            _ when this == AwsSecretKey => onAwsSecretKey(),
            _ when this == IpAddress => onIpAddress(),
            _ when this == MacAddress => onMacAddress(),
            _ when this == LicensePlate => onLicensePlate(),
            _ when this == VehicleIdentificationNumber => onVehicleIdentificationNumber(),
            _ when this == UsIndividualTaxIdentificationNumber => onUsIndividualTaxIdentificationNumber(),
            _ when this == CaHealthNumber => onCaHealthNumber(),
            _ when this == CaSocialInsuranceNumber => onCaSocialInsuranceNumber(),
            _ when this == InternationalBankAccountNumber => onInternationalBankAccountNumber(),
            _ when this == SwiftCode => onSwiftCode(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccountNumber,
        Action onBankRouting,
        Action onCreditDebitNumber,
        Action onCreditDebitCvv,
        Action onCreditDebitExpiry,
        Action onPin,
        Action onEmail,
        Action onAddress,
        Action onName,
        Action onPhone,
        Action onSsn,
        Action onDateTime,
        Action onPassportNumber,
        Action onDriverId,
        Action onUrl,
        Action onAge,
        Action onUsername,
        Action onPassword,
        Action onAwsAccessKey,
        Action onAwsSecretKey,
        Action onIpAddress,
        Action onMacAddress,
        Action onLicensePlate,
        Action onVehicleIdentificationNumber,
        Action onUsIndividualTaxIdentificationNumber,
        Action onCaHealthNumber,
        Action onCaSocialInsuranceNumber,
        Action onInternationalBankAccountNumber,
        Action onSwiftCode,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == BankAccountNumber) onBankAccountNumber();
        else if (this == BankRouting) onBankRouting();
        else if (this == CreditDebitNumber) onCreditDebitNumber();
        else if (this == CreditDebitCvv) onCreditDebitCvv();
        else if (this == CreditDebitExpiry) onCreditDebitExpiry();
        else if (this == Pin) onPin();
        else if (this == Email) onEmail();
        else if (this == Address) onAddress();
        else if (this == Name) onName();
        else if (this == Phone) onPhone();
        else if (this == Ssn) onSsn();
        else if (this == DateTime) onDateTime();
        else if (this == PassportNumber) onPassportNumber();
        else if (this == DriverId) onDriverId();
        else if (this == Url) onUrl();
        else if (this == Age) onAge();
        else if (this == Username) onUsername();
        else if (this == Password) onPassword();
        else if (this == AwsAccessKey) onAwsAccessKey();
        else if (this == AwsSecretKey) onAwsSecretKey();
        else if (this == IpAddress) onIpAddress();
        else if (this == MacAddress) onMacAddress();
        else if (this == LicensePlate) onLicensePlate();
        else if (this == VehicleIdentificationNumber) onVehicleIdentificationNumber();
        else if (this == UsIndividualTaxIdentificationNumber) onUsIndividualTaxIdentificationNumber();
        else if (this == CaHealthNumber) onCaHealthNumber();
        else if (this == CaSocialInsuranceNumber) onCaSocialInsuranceNumber();
        else if (this == InternationalBankAccountNumber) onInternationalBankAccountNumber();
        else if (this == SwiftCode) onSwiftCode();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
