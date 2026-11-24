using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HiringByDepartment>))]
public sealed record HiringByDepartment : OpenStringEnum<HiringByDepartment>
{
    private HiringByDepartment(string value) : base(value)
    {
    }

    public static readonly HiringByDepartment BusinessDevelopment = new("Business Development");

    public static readonly HiringByDepartment Consulting = new("Consulting");

    public static readonly HiringByDepartment CustomerService = new("Customer Service");

    public static readonly HiringByDepartment EngineeringTechnical = new("Engineering & Technical");

    public static readonly HiringByDepartment Finance = new("Finance");

    public static readonly HiringByDepartment GeneralManagement = new("General Management");

    public static readonly HiringByDepartment HealthCareMedical = new("Health Care & Medical");

    public static readonly HiringByDepartment HumanResources = new("Human Resources");

    public static readonly HiringByDepartment InformationTechnology = new("Information Technology");

    public static readonly HiringByDepartment Legal = new("Legal");

    public static readonly HiringByDepartment Marketing = new("Marketing");

    public static readonly HiringByDepartment Operations = new("Operations");

    public static readonly HiringByDepartment Other = new("Other");

    public static readonly HiringByDepartment Product = new("Product");

    public static readonly HiringByDepartment ResearchAnalytics = new("Research & Analytics");

    public static readonly HiringByDepartment Sales = new("Sales");

    public TResult Match<TResult>(Func<TResult> onBusinessDevelopment,
        Func<TResult> onConsulting,
        Func<TResult> onCustomerService,
        Func<TResult> onEngineeringTechnical,
        Func<TResult> onFinance,
        Func<TResult> onGeneralManagement,
        Func<TResult> onHealthCareMedical,
        Func<TResult> onHumanResources,
        Func<TResult> onInformationTechnology,
        Func<TResult> onLegal,
        Func<TResult> onMarketing,
        Func<TResult> onOperations,
        Func<TResult> onOther,
        Func<TResult> onProduct,
        Func<TResult> onResearchAnalytics,
        Func<TResult> onSales,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BusinessDevelopment => onBusinessDevelopment(),
            _ when this == Consulting => onConsulting(),
            _ when this == CustomerService => onCustomerService(),
            _ when this == EngineeringTechnical => onEngineeringTechnical(),
            _ when this == Finance => onFinance(),
            _ when this == GeneralManagement => onGeneralManagement(),
            _ when this == HealthCareMedical => onHealthCareMedical(),
            _ when this == HumanResources => onHumanResources(),
            _ when this == InformationTechnology => onInformationTechnology(),
            _ when this == Legal => onLegal(),
            _ when this == Marketing => onMarketing(),
            _ when this == Operations => onOperations(),
            _ when this == Other => onOther(),
            _ when this == Product => onProduct(),
            _ when this == ResearchAnalytics => onResearchAnalytics(),
            _ when this == Sales => onSales(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusinessDevelopment,
        Action onConsulting,
        Action onCustomerService,
        Action onEngineeringTechnical,
        Action onFinance,
        Action onGeneralManagement,
        Action onHealthCareMedical,
        Action onHumanResources,
        Action onInformationTechnology,
        Action onLegal,
        Action onMarketing,
        Action onOperations,
        Action onOther,
        Action onProduct,
        Action onResearchAnalytics,
        Action onSales,
        Action<string> otherwise)
    {
        if (this == BusinessDevelopment) onBusinessDevelopment();
        else if (this == Consulting) onConsulting();
        else if (this == CustomerService) onCustomerService();
        else if (this == EngineeringTechnical) onEngineeringTechnical();
        else if (this == Finance) onFinance();
        else if (this == GeneralManagement) onGeneralManagement();
        else if (this == HealthCareMedical) onHealthCareMedical();
        else if (this == HumanResources) onHumanResources();
        else if (this == InformationTechnology) onInformationTechnology();
        else if (this == Legal) onLegal();
        else if (this == Marketing) onMarketing();
        else if (this == Operations) onOperations();
        else if (this == Other) onOther();
        else if (this == Product) onProduct();
        else if (this == ResearchAnalytics) onResearchAnalytics();
        else if (this == Sales) onSales();
        else otherwise(Value);
    }
}
