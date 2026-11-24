using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Institution type identifier
/// Bank BankInstitutionType  BankInstitutionType institution type identifier for Banks
/// Bank (Foreign) BankForeignInstitutionType BankForeignInstitutionType institution type identifier for Foreign banks
/// Test Bank TestBankInstitutionType  TestBankInstitutionType institution type identifier for Test banks
/// Credit Union CreditUnionInstitutionType  CreditUnionInstitutionType institution type identifier for Credit union institutions
/// Financial Services FinancialServicesInstitutionType FinancialServicesInstitutionType institution type identifier for Financial service institutions
/// Superannuation SuperannuationInstitutionType SuperannuationInstitutionType institution type identifier for Superannuation institutions
/// Building Society BuildingSociety  BuildingSociety institution type identifier for Building Society institutions
/// Government Government  Government institution type identifier for Government institutions
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypePlatformConnectorsApi>))]
public sealed record TypePlatformConnectorsApi : OpenStringEnum<TypePlatformConnectorsApi>
{
    private TypePlatformConnectorsApi(string value) : base(value)
    {
    }

    public static readonly TypePlatformConnectorsApi Bank = new("Bank");

    public static readonly TypePlatformConnectorsApi BankForeign = new("Bank (Foreign)");

    public static readonly TypePlatformConnectorsApi TestBank = new("Test Bank");

    public static readonly TypePlatformConnectorsApi CreditUnion = new("Credit Union");

    public static readonly TypePlatformConnectorsApi FinancialServices = new("Financial Services");

    public static readonly TypePlatformConnectorsApi Superannuation = new("Superannuation");

    public static readonly TypePlatformConnectorsApi BuildingSociety = new("Building Society");

    public static readonly TypePlatformConnectorsApi Government = new("Government");

    public TResult Match<TResult>(Func<TResult> onBank,
        Func<TResult> onBankForeign,
        Func<TResult> onTestBank,
        Func<TResult> onCreditUnion,
        Func<TResult> onFinancialServices,
        Func<TResult> onSuperannuation,
        Func<TResult> onBuildingSociety,
        Func<TResult> onGovernment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bank => onBank(),
            _ when this == BankForeign => onBankForeign(),
            _ when this == TestBank => onTestBank(),
            _ when this == CreditUnion => onCreditUnion(),
            _ when this == FinancialServices => onFinancialServices(),
            _ when this == Superannuation => onSuperannuation(),
            _ when this == BuildingSociety => onBuildingSociety(),
            _ when this == Government => onGovernment(),
            _ => otherwise(Value)
        };

    public void Match(Action onBank,
        Action onBankForeign,
        Action onTestBank,
        Action onCreditUnion,
        Action onFinancialServices,
        Action onSuperannuation,
        Action onBuildingSociety,
        Action onGovernment,
        Action<string> otherwise)
    {
        if (this == Bank) onBank();
        else if (this == BankForeign) onBankForeign();
        else if (this == TestBank) onTestBank();
        else if (this == CreditUnion) onCreditUnion();
        else if (this == FinancialServices) onFinancialServices();
        else if (this == Superannuation) onSuperannuation();
        else if (this == BuildingSociety) onBuildingSociety();
        else if (this == Government) onGovernment();
        else otherwise(Value);
    }
}
