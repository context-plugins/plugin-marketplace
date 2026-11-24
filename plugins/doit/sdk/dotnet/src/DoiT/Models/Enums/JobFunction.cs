using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobFunction>))]
public sealed record JobFunction : OpenStringEnum<JobFunction>
{
    private JobFunction(string value) : base(value)
    {
    }

    public static readonly JobFunction DataEngineerDataAnalysts = new("Data Engineer / Data Analysts");

    public static readonly JobFunction ExecutiveTeam = new("Executive Team");

    public static readonly JobFunction FinanceAccounting = new("Finance / Accounting");

    public static readonly JobFunction Founder = new("Founder");

    public static readonly JobFunction LegalPurchasing = new("Legal / Purchasing");

    public static readonly JobFunction Management = new("Management");

    public static readonly JobFunction SalesMarketing = new("Sales / Marketing");

    public static readonly JobFunction SoftwareOpsEngineer = new("Software / Ops Engineer");

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
