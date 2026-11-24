using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobCategory>))]
public sealed record JobCategory : OpenStringEnum<JobCategory>
{
    private JobCategory(string value) : base(value)
    {
    }

    public static readonly JobCategory JobCategoryUnspecified = new("JOB_CATEGORY_UNSPECIFIED");

    public static readonly JobCategory AccountingAndFinance = new("ACCOUNTING_AND_FINANCE");

    public static readonly JobCategory AdministrativeAndOffice = new("ADMINISTRATIVE_AND_OFFICE");

    public static readonly JobCategory AdvertisingAndMarketing = new("ADVERTISING_AND_MARKETING");

    public static readonly JobCategory AnimalCare = new("ANIMAL_CARE");

    public static readonly JobCategory ArtFashionAndDesign = new("ART_FASHION_AND_DESIGN");

    public static readonly JobCategory BusinessOperations = new("BUSINESS_OPERATIONS");

    public static readonly JobCategory CleaningAndFacilities = new("CLEANING_AND_FACILITIES");

    public static readonly JobCategory ComputerAndIt = new("COMPUTER_AND_IT");

    public static readonly JobCategory Construction = new("CONSTRUCTION");

    public static readonly JobCategory CustomerService = new("CUSTOMER_SERVICE");

    public static readonly JobCategory Education = new("EDUCATION");

    public static readonly JobCategory EntertainmentAndTravel = new("ENTERTAINMENT_AND_TRAVEL");

    public static readonly JobCategory FarmingAndOutdoors = new("FARMING_AND_OUTDOORS");

    public static readonly JobCategory Healthcare = new("HEALTHCARE");

    public static readonly JobCategory HumanResources = new("HUMAN_RESOURCES");

    public static readonly JobCategory InstallationMaintenanceAndRepair = new("INSTALLATION_MAINTENANCE_AND_REPAIR");

    public static readonly JobCategory Legal = new("LEGAL");

    public static readonly JobCategory Management = new("MANAGEMENT");

    public static readonly JobCategory ManufacturingAndWarehouse = new("MANUFACTURING_AND_WAREHOUSE");

    public static readonly JobCategory MediaCommunicationsAndWriting = new("MEDIA_COMMUNICATIONS_AND_WRITING");

    public static readonly JobCategory OilGasAndMining = new("OIL_GAS_AND_MINING");

    public static readonly JobCategory PersonalCareAndServices = new("PERSONAL_CARE_AND_SERVICES");

    public static readonly JobCategory ProtectiveServices = new("PROTECTIVE_SERVICES");

    public static readonly JobCategory RealEstate = new("REAL_ESTATE");

    public static readonly JobCategory RestaurantAndHospitality = new("RESTAURANT_AND_HOSPITALITY");

    public static readonly JobCategory SalesAndRetail = new("SALES_AND_RETAIL");

    public static readonly JobCategory ScienceAndEngineering = new("SCIENCE_AND_ENGINEERING");

    public static readonly JobCategory SocialServicesAndNonProfit = new("SOCIAL_SERVICES_AND_NON_PROFIT");

    public static readonly JobCategory SportsFitnessAndRecreation = new("SPORTS_FITNESS_AND_RECREATION");

    public static readonly JobCategory TransportationAndLogistics = new("TRANSPORTATION_AND_LOGISTICS");

    public TResult Match<TResult>(Func<TResult> onJobCategoryUnspecified,
        Func<TResult> onAccountingAndFinance,
        Func<TResult> onAdministrativeAndOffice,
        Func<TResult> onAdvertisingAndMarketing,
        Func<TResult> onAnimalCare,
        Func<TResult> onArtFashionAndDesign,
        Func<TResult> onBusinessOperations,
        Func<TResult> onCleaningAndFacilities,
        Func<TResult> onComputerAndIt,
        Func<TResult> onConstruction,
        Func<TResult> onCustomerService,
        Func<TResult> onEducation,
        Func<TResult> onEntertainmentAndTravel,
        Func<TResult> onFarmingAndOutdoors,
        Func<TResult> onHealthcare,
        Func<TResult> onHumanResources,
        Func<TResult> onInstallationMaintenanceAndRepair,
        Func<TResult> onLegal,
        Func<TResult> onManagement,
        Func<TResult> onManufacturingAndWarehouse,
        Func<TResult> onMediaCommunicationsAndWriting,
        Func<TResult> onOilGasAndMining,
        Func<TResult> onPersonalCareAndServices,
        Func<TResult> onProtectiveServices,
        Func<TResult> onRealEstate,
        Func<TResult> onRestaurantAndHospitality,
        Func<TResult> onSalesAndRetail,
        Func<TResult> onScienceAndEngineering,
        Func<TResult> onSocialServicesAndNonProfit,
        Func<TResult> onSportsFitnessAndRecreation,
        Func<TResult> onTransportationAndLogistics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobCategoryUnspecified => onJobCategoryUnspecified(),
            _ when this == AccountingAndFinance => onAccountingAndFinance(),
            _ when this == AdministrativeAndOffice => onAdministrativeAndOffice(),
            _ when this == AdvertisingAndMarketing => onAdvertisingAndMarketing(),
            _ when this == AnimalCare => onAnimalCare(),
            _ when this == ArtFashionAndDesign => onArtFashionAndDesign(),
            _ when this == BusinessOperations => onBusinessOperations(),
            _ when this == CleaningAndFacilities => onCleaningAndFacilities(),
            _ when this == ComputerAndIt => onComputerAndIt(),
            _ when this == Construction => onConstruction(),
            _ when this == CustomerService => onCustomerService(),
            _ when this == Education => onEducation(),
            _ when this == EntertainmentAndTravel => onEntertainmentAndTravel(),
            _ when this == FarmingAndOutdoors => onFarmingAndOutdoors(),
            _ when this == Healthcare => onHealthcare(),
            _ when this == HumanResources => onHumanResources(),
            _ when this == InstallationMaintenanceAndRepair => onInstallationMaintenanceAndRepair(),
            _ when this == Legal => onLegal(),
            _ when this == Management => onManagement(),
            _ when this == ManufacturingAndWarehouse => onManufacturingAndWarehouse(),
            _ when this == MediaCommunicationsAndWriting => onMediaCommunicationsAndWriting(),
            _ when this == OilGasAndMining => onOilGasAndMining(),
            _ when this == PersonalCareAndServices => onPersonalCareAndServices(),
            _ when this == ProtectiveServices => onProtectiveServices(),
            _ when this == RealEstate => onRealEstate(),
            _ when this == RestaurantAndHospitality => onRestaurantAndHospitality(),
            _ when this == SalesAndRetail => onSalesAndRetail(),
            _ when this == ScienceAndEngineering => onScienceAndEngineering(),
            _ when this == SocialServicesAndNonProfit => onSocialServicesAndNonProfit(),
            _ when this == SportsFitnessAndRecreation => onSportsFitnessAndRecreation(),
            _ when this == TransportationAndLogistics => onTransportationAndLogistics(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobCategoryUnspecified,
        Action onAccountingAndFinance,
        Action onAdministrativeAndOffice,
        Action onAdvertisingAndMarketing,
        Action onAnimalCare,
        Action onArtFashionAndDesign,
        Action onBusinessOperations,
        Action onCleaningAndFacilities,
        Action onComputerAndIt,
        Action onConstruction,
        Action onCustomerService,
        Action onEducation,
        Action onEntertainmentAndTravel,
        Action onFarmingAndOutdoors,
        Action onHealthcare,
        Action onHumanResources,
        Action onInstallationMaintenanceAndRepair,
        Action onLegal,
        Action onManagement,
        Action onManufacturingAndWarehouse,
        Action onMediaCommunicationsAndWriting,
        Action onOilGasAndMining,
        Action onPersonalCareAndServices,
        Action onProtectiveServices,
        Action onRealEstate,
        Action onRestaurantAndHospitality,
        Action onSalesAndRetail,
        Action onScienceAndEngineering,
        Action onSocialServicesAndNonProfit,
        Action onSportsFitnessAndRecreation,
        Action onTransportationAndLogistics,
        Action<string> otherwise)
    {
        if (this == JobCategoryUnspecified) onJobCategoryUnspecified();
        else if (this == AccountingAndFinance) onAccountingAndFinance();
        else if (this == AdministrativeAndOffice) onAdministrativeAndOffice();
        else if (this == AdvertisingAndMarketing) onAdvertisingAndMarketing();
        else if (this == AnimalCare) onAnimalCare();
        else if (this == ArtFashionAndDesign) onArtFashionAndDesign();
        else if (this == BusinessOperations) onBusinessOperations();
        else if (this == CleaningAndFacilities) onCleaningAndFacilities();
        else if (this == ComputerAndIt) onComputerAndIt();
        else if (this == Construction) onConstruction();
        else if (this == CustomerService) onCustomerService();
        else if (this == Education) onEducation();
        else if (this == EntertainmentAndTravel) onEntertainmentAndTravel();
        else if (this == FarmingAndOutdoors) onFarmingAndOutdoors();
        else if (this == Healthcare) onHealthcare();
        else if (this == HumanResources) onHumanResources();
        else if (this == InstallationMaintenanceAndRepair) onInstallationMaintenanceAndRepair();
        else if (this == Legal) onLegal();
        else if (this == Management) onManagement();
        else if (this == ManufacturingAndWarehouse) onManufacturingAndWarehouse();
        else if (this == MediaCommunicationsAndWriting) onMediaCommunicationsAndWriting();
        else if (this == OilGasAndMining) onOilGasAndMining();
        else if (this == PersonalCareAndServices) onPersonalCareAndServices();
        else if (this == ProtectiveServices) onProtectiveServices();
        else if (this == RealEstate) onRealEstate();
        else if (this == RestaurantAndHospitality) onRestaurantAndHospitality();
        else if (this == SalesAndRetail) onSalesAndRetail();
        else if (this == ScienceAndEngineering) onScienceAndEngineering();
        else if (this == SocialServicesAndNonProfit) onSocialServicesAndNonProfit();
        else if (this == SportsFitnessAndRecreation) onSportsFitnessAndRecreation();
        else if (this == TransportationAndLogistics) onTransportationAndLogistics();
        else otherwise(Value);
    }
}
