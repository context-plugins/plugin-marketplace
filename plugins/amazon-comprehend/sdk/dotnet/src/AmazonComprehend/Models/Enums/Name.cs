using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The name of the label.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name>))]
public sealed record Name : OpenStringEnum<Name>
{
    private Name(string value) : base(value)
    {
    }

    public static readonly Name BankAccountNumber = new("BANK_ACCOUNT_NUMBER");

    public static readonly Name BankRouting = new("BANK_ROUTING");

    public static readonly Name CreditDebitNumber = new("CREDIT_DEBIT_NUMBER");

    public static readonly Name CreditDebitCvv = new("CREDIT_DEBIT_CVV");

    public static readonly Name CreditDebitExpiry = new("CREDIT_DEBIT_EXPIRY");

    public static readonly Name Pin = new("PIN");

    public static readonly Name Email = new("EMAIL");

    public static readonly Name Address = new("ADDRESS");

    public static readonly Name NameMember = new("NAME");

    public static readonly Name Phone = new("PHONE");

    public static readonly Name Ssn = new("SSN");

    public static readonly Name DateTime = new("DATE_TIME");

    public static readonly Name PassportNumber = new("PASSPORT_NUMBER");

    public static readonly Name DriverId = new("DRIVER_ID");

    public static readonly Name Url = new("URL");

    public static readonly Name Age = new("AGE");

    public static readonly Name Username = new("USERNAME");

    public static readonly Name Password = new("PASSWORD");

    public static readonly Name AwsAccessKey = new("AWS_ACCESS_KEY");

    public static readonly Name AwsSecretKey = new("AWS_SECRET_KEY");

    public static readonly Name IpAddress = new("IP_ADDRESS");

    public static readonly Name MacAddress = new("MAC_ADDRESS");

    public static readonly Name All = new("ALL");

    public static readonly Name LicensePlate = new("LICENSE_PLATE");

    public static readonly Name VehicleIdentificationNumber = new("VEHICLE_IDENTIFICATION_NUMBER");

    public static readonly Name UkNationalInsuranceNumber = new("UK_NATIONAL_INSURANCE_NUMBER");

    public static readonly Name CaSocialInsuranceNumber = new("CA_SOCIAL_INSURANCE_NUMBER");

    public static readonly Name UsIndividualTaxIdentificationNumber = new("US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER");

    public static readonly Name UkUniqueTaxpayerReferenceNumber = new("UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER");

    public static readonly Name InPermanentAccountNumber = new("IN_PERMANENT_ACCOUNT_NUMBER");

    public static readonly Name InNrega = new("IN_NREGA");

    public static readonly Name InternationalBankAccountNumber = new("INTERNATIONAL_BANK_ACCOUNT_NUMBER");

    public static readonly Name SwiftCode = new("SWIFT_CODE");

    public static readonly Name UkNationalHealthServiceNumber = new("UK_NATIONAL_HEALTH_SERVICE_NUMBER");

    public static readonly Name CaHealthNumber = new("CA_HEALTH_NUMBER");

    public static readonly Name InAadhaar = new("IN_AADHAAR");

    public static readonly Name InVoterNumber = new("IN_VOTER_NUMBER");

    public TResult Match<TResult>(Func<TResult> onBankAccountNumber,
        Func<TResult> onBankRouting,
        Func<TResult> onCreditDebitNumber,
        Func<TResult> onCreditDebitCvv,
        Func<TResult> onCreditDebitExpiry,
        Func<TResult> onPin,
        Func<TResult> onEmail,
        Func<TResult> onAddress,
        Func<TResult> onNameMember,
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
        Func<TResult> onAll,
        Func<TResult> onLicensePlate,
        Func<TResult> onVehicleIdentificationNumber,
        Func<TResult> onUkNationalInsuranceNumber,
        Func<TResult> onCaSocialInsuranceNumber,
        Func<TResult> onUsIndividualTaxIdentificationNumber,
        Func<TResult> onUkUniqueTaxpayerReferenceNumber,
        Func<TResult> onInPermanentAccountNumber,
        Func<TResult> onInNrega,
        Func<TResult> onInternationalBankAccountNumber,
        Func<TResult> onSwiftCode,
        Func<TResult> onUkNationalHealthServiceNumber,
        Func<TResult> onCaHealthNumber,
        Func<TResult> onInAadhaar,
        Func<TResult> onInVoterNumber,
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
            _ when this == NameMember => onNameMember(),
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
            _ when this == All => onAll(),
            _ when this == LicensePlate => onLicensePlate(),
            _ when this == VehicleIdentificationNumber => onVehicleIdentificationNumber(),
            _ when this == UkNationalInsuranceNumber => onUkNationalInsuranceNumber(),
            _ when this == CaSocialInsuranceNumber => onCaSocialInsuranceNumber(),
            _ when this == UsIndividualTaxIdentificationNumber => onUsIndividualTaxIdentificationNumber(),
            _ when this == UkUniqueTaxpayerReferenceNumber => onUkUniqueTaxpayerReferenceNumber(),
            _ when this == InPermanentAccountNumber => onInPermanentAccountNumber(),
            _ when this == InNrega => onInNrega(),
            _ when this == InternationalBankAccountNumber => onInternationalBankAccountNumber(),
            _ when this == SwiftCode => onSwiftCode(),
            _ when this == UkNationalHealthServiceNumber => onUkNationalHealthServiceNumber(),
            _ when this == CaHealthNumber => onCaHealthNumber(),
            _ when this == InAadhaar => onInAadhaar(),
            _ when this == InVoterNumber => onInVoterNumber(),
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
        Action onNameMember,
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
        Action onAll,
        Action onLicensePlate,
        Action onVehicleIdentificationNumber,
        Action onUkNationalInsuranceNumber,
        Action onCaSocialInsuranceNumber,
        Action onUsIndividualTaxIdentificationNumber,
        Action onUkUniqueTaxpayerReferenceNumber,
        Action onInPermanentAccountNumber,
        Action onInNrega,
        Action onInternationalBankAccountNumber,
        Action onSwiftCode,
        Action onUkNationalHealthServiceNumber,
        Action onCaHealthNumber,
        Action onInAadhaar,
        Action onInVoterNumber,
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
        else if (this == NameMember) onNameMember();
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
        else if (this == All) onAll();
        else if (this == LicensePlate) onLicensePlate();
        else if (this == VehicleIdentificationNumber) onVehicleIdentificationNumber();
        else if (this == UkNationalInsuranceNumber) onUkNationalInsuranceNumber();
        else if (this == CaSocialInsuranceNumber) onCaSocialInsuranceNumber();
        else if (this == UsIndividualTaxIdentificationNumber) onUsIndividualTaxIdentificationNumber();
        else if (this == UkUniqueTaxpayerReferenceNumber) onUkUniqueTaxpayerReferenceNumber();
        else if (this == InPermanentAccountNumber) onInPermanentAccountNumber();
        else if (this == InNrega) onInNrega();
        else if (this == InternationalBankAccountNumber) onInternationalBankAccountNumber();
        else if (this == SwiftCode) onSwiftCode();
        else if (this == UkNationalHealthServiceNumber) onUkNationalHealthServiceNumber();
        else if (this == CaHealthNumber) onCaHealthNumber();
        else if (this == InAadhaar) onInAadhaar();
        else if (this == InVoterNumber) onInVoterNumber();
        else otherwise(Value);
    }
}
