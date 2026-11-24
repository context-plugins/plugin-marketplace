using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The job function of the user being invited.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobTitle2>))]
public sealed record JobTitle2 : OpenStringEnum<JobTitle2>
{
    private JobTitle2(string value) : base(value)
    {
    }

    public static readonly JobTitle2 DataEngineerDataAnalysts = new("Data Engineer / Data Analysts");

    public static readonly JobTitle2 ExecutiveTeam = new("Executive Team");

    public static readonly JobTitle2 FinanceAccounting = new("Finance / Accounting");

    public static readonly JobTitle2 Founder = new("Founder");

    public static readonly JobTitle2 LegalPurchasing = new("Legal / Purchasing");

    public static readonly JobTitle2 Management = new("Management");

    public static readonly JobTitle2 SalesMarketing = new("Sales / Marketing");

    public static readonly JobTitle2 SoftwareOpsEngineer = new("Software / Ops Engineer");

    public TResult Match<TResult>(Func<TResult> onDataEngineerDataAnalysts,
        Func<TResult> onExecutiveTeam,
        Func<TResult> onFinanceAccounting,
        Func<TResult> onFounder,
        Func<TResult> onLegalPurchasing,
        Func<TResult> onManagement,
        Func<TResult> onSalesMarketing,
        Func<TResult> onSoftwareOpsEngineer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataEngineerDataAnalysts => onDataEngineerDataAnalysts(),
            _ when this == ExecutiveTeam => onExecutiveTeam(),
            _ when this == FinanceAccounting => onFinanceAccounting(),
            _ when this == Founder => onFounder(),
            _ when this == LegalPurchasing => onLegalPurchasing(),
            _ when this == Management => onManagement(),
            _ when this == SalesMarketing => onSalesMarketing(),
            _ when this == SoftwareOpsEngineer => onSoftwareOpsEngineer(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataEngineerDataAnalysts,
        Action onExecutiveTeam,
        Action onFinanceAccounting,
        Action onFounder,
        Action onLegalPurchasing,
        Action onManagement,
        Action onSalesMarketing,
        Action onSoftwareOpsEngineer,
        Action<string> otherwise)
    {
        if (this == DataEngineerDataAnalysts) onDataEngineerDataAnalysts();
        else if (this == ExecutiveTeam) onExecutiveTeam();
        else if (this == FinanceAccounting) onFinanceAccounting();
        else if (this == Founder) onFounder();
        else if (this == LegalPurchasing) onLegalPurchasing();
        else if (this == Management) onManagement();
        else if (this == SalesMarketing) onSalesMarketing();
        else if (this == SoftwareOpsEngineer) onSoftwareOpsEngineer();
        else otherwise(Value);
    }
}
