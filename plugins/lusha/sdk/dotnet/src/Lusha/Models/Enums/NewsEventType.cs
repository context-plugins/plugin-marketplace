using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NewsEventType>))]
public sealed record NewsEventType : OpenStringEnum<NewsEventType>
{
    private NewsEventType(string value) : base(value)
    {
    }

    public static readonly NewsEventType AssetInvestment = new("Asset Investment");

    public static readonly NewsEventType AssetSale = new("Asset Sale");

    public static readonly NewsEventType CompetitorActivity = new("Competitor Activity");

    public static readonly NewsEventType EventParticipation = new("Event Participation");

    public static readonly NewsEventType ExecutiveDeparture = new("Executive Departure");

    public static readonly NewsEventType ExecutiveHire = new("Executive Hire");

    public static readonly NewsEventType ExecutivePromotion = new("Executive Promotion");

    public static readonly NewsEventType FacilitiesExpansion = new("Facilities Expansion");

    public static readonly NewsEventType FacilityClosure = new("Facility Closure");

    public static readonly NewsEventType FundingRound = new("Funding Round");

    public static readonly NewsEventType HeadcountDecrease = new("Headcount Decrease");

    public static readonly NewsEventType HeadcountIncrease = new("Headcount Increase");

    public static readonly NewsEventType Ipo = new("IPO");

    public static readonly NewsEventType LawsuitFaced = new("Lawsuit Faced");

    public static readonly NewsEventType LawsuitFiled = new("Lawsuit Filed");

    public static readonly NewsEventType Ma = new("M&A");

    public static readonly NewsEventType NewCustomer = new("New Customer");

    public static readonly NewsEventType NewLocation = new("New Location");

    public static readonly NewsEventType NewVendor = new("New Vendor");

    public static readonly NewsEventType Partnership = new("Partnership");

    public static readonly NewsEventType ProductDevelopment = new("Product Development");

    public static readonly NewsEventType ProductIntegration = new("Product Integration");

    public static readonly NewsEventType ProductLaunch = new("Product Launch");

    public static readonly NewsEventType Recognition = new("Recognition");

    public static readonly NewsEventType SecurityIssue = new("Security Issue");

    public static readonly NewsEventType StrategicInvestment = new("Strategic Investment");

    public TResult Match<TResult>(Func<TResult> onAssetInvestment,
        Func<TResult> onAssetSale,
        Func<TResult> onCompetitorActivity,
        Func<TResult> onEventParticipation,
        Func<TResult> onExecutiveDeparture,
        Func<TResult> onExecutiveHire,
        Func<TResult> onExecutivePromotion,
        Func<TResult> onFacilitiesExpansion,
        Func<TResult> onFacilityClosure,
        Func<TResult> onFundingRound,
        Func<TResult> onHeadcountDecrease,
        Func<TResult> onHeadcountIncrease,
        Func<TResult> onIpo,
        Func<TResult> onLawsuitFaced,
        Func<TResult> onLawsuitFiled,
        Func<TResult> onMa,
        Func<TResult> onNewCustomer,
        Func<TResult> onNewLocation,
        Func<TResult> onNewVendor,
        Func<TResult> onPartnership,
        Func<TResult> onProductDevelopment,
        Func<TResult> onProductIntegration,
        Func<TResult> onProductLaunch,
        Func<TResult> onRecognition,
        Func<TResult> onSecurityIssue,
        Func<TResult> onStrategicInvestment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AssetInvestment => onAssetInvestment(),
            _ when this == AssetSale => onAssetSale(),
            _ when this == CompetitorActivity => onCompetitorActivity(),
            _ when this == EventParticipation => onEventParticipation(),
            _ when this == ExecutiveDeparture => onExecutiveDeparture(),
            _ when this == ExecutiveHire => onExecutiveHire(),
            _ when this == ExecutivePromotion => onExecutivePromotion(),
            _ when this == FacilitiesExpansion => onFacilitiesExpansion(),
            _ when this == FacilityClosure => onFacilityClosure(),
            _ when this == FundingRound => onFundingRound(),
            _ when this == HeadcountDecrease => onHeadcountDecrease(),
            _ when this == HeadcountIncrease => onHeadcountIncrease(),
            _ when this == Ipo => onIpo(),
            _ when this == LawsuitFaced => onLawsuitFaced(),
            _ when this == LawsuitFiled => onLawsuitFiled(),
            _ when this == Ma => onMa(),
            _ when this == NewCustomer => onNewCustomer(),
            _ when this == NewLocation => onNewLocation(),
            _ when this == NewVendor => onNewVendor(),
            _ when this == Partnership => onPartnership(),
            _ when this == ProductDevelopment => onProductDevelopment(),
            _ when this == ProductIntegration => onProductIntegration(),
            _ when this == ProductLaunch => onProductLaunch(),
            _ when this == Recognition => onRecognition(),
            _ when this == SecurityIssue => onSecurityIssue(),
            _ when this == StrategicInvestment => onStrategicInvestment(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssetInvestment,
        Action onAssetSale,
        Action onCompetitorActivity,
        Action onEventParticipation,
        Action onExecutiveDeparture,
        Action onExecutiveHire,
        Action onExecutivePromotion,
        Action onFacilitiesExpansion,
        Action onFacilityClosure,
        Action onFundingRound,
        Action onHeadcountDecrease,
        Action onHeadcountIncrease,
        Action onIpo,
        Action onLawsuitFaced,
        Action onLawsuitFiled,
        Action onMa,
        Action onNewCustomer,
        Action onNewLocation,
        Action onNewVendor,
        Action onPartnership,
        Action onProductDevelopment,
        Action onProductIntegration,
        Action onProductLaunch,
        Action onRecognition,
        Action onSecurityIssue,
        Action onStrategicInvestment,
        Action<string> otherwise)
    {
        if (this == AssetInvestment) onAssetInvestment();
        else if (this == AssetSale) onAssetSale();
        else if (this == CompetitorActivity) onCompetitorActivity();
        else if (this == EventParticipation) onEventParticipation();
        else if (this == ExecutiveDeparture) onExecutiveDeparture();
        else if (this == ExecutiveHire) onExecutiveHire();
        else if (this == ExecutivePromotion) onExecutivePromotion();
        else if (this == FacilitiesExpansion) onFacilitiesExpansion();
        else if (this == FacilityClosure) onFacilityClosure();
        else if (this == FundingRound) onFundingRound();
        else if (this == HeadcountDecrease) onHeadcountDecrease();
        else if (this == HeadcountIncrease) onHeadcountIncrease();
        else if (this == Ipo) onIpo();
        else if (this == LawsuitFaced) onLawsuitFaced();
        else if (this == LawsuitFiled) onLawsuitFiled();
        else if (this == Ma) onMa();
        else if (this == NewCustomer) onNewCustomer();
        else if (this == NewLocation) onNewLocation();
        else if (this == NewVendor) onNewVendor();
        else if (this == Partnership) onPartnership();
        else if (this == ProductDevelopment) onProductDevelopment();
        else if (this == ProductIntegration) onProductIntegration();
        else if (this == ProductLaunch) onProductLaunch();
        else if (this == Recognition) onRecognition();
        else if (this == SecurityIssue) onSecurityIssue();
        else if (this == StrategicInvestment) onStrategicInvestment();
        else otherwise(Value);
    }
}
