using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Activity>))]
public sealed record Activity : OpenStringEnum<Activity>
{
    private Activity(string value) : base(value)
    {
    }

    public static readonly Activity GeneralCommerce = new("general_commerce");

    public static readonly Activity SellPrescriptionDrugs = new("sell_prescription_drugs");

    public static readonly Activity ManufactureDrugs = new("manufacture_drugs");

    public static readonly Activity SellMedicalDevices = new("sell_medical_devices");

    public static readonly Activity HaulFreight = new("haul_freight");

    public static readonly Activity BrokerFreight = new("broker_freight");

    public static readonly Activity SellAlcohol = new("sell_alcohol");

    public static readonly Activity ProduceSpirits = new("produce_spirits");

    public static readonly Activity ProvideInvestmentAdvice = new("provide_investment_advice");

    public static readonly Activity AcceptDeposits = new("accept_deposits");

    public static readonly Activity Lend = new("lend");

    public static readonly Activity BillMedicareMedicaid = new("bill_medicare_medicaid");

    public static readonly Activity HealthcareSupplier = new("healthcare_supplier");

    public static readonly Activity FederalContracting = new("federal_contracting");

    public static readonly Activity CharitableSolicitation = new("charitable_solicitation");

    public static readonly Activity Construction = new("construction");

    public static readonly Activity OperatePsilocybinHealingCenter = new("operate_psilocybin_healing_center");

    public TResult Match<TResult>(Func<TResult> onGeneralCommerce,
        Func<TResult> onSellPrescriptionDrugs,
        Func<TResult> onManufactureDrugs,
        Func<TResult> onSellMedicalDevices,
        Func<TResult> onHaulFreight,
        Func<TResult> onBrokerFreight,
        Func<TResult> onSellAlcohol,
        Func<TResult> onProduceSpirits,
        Func<TResult> onProvideInvestmentAdvice,
        Func<TResult> onAcceptDeposits,
        Func<TResult> onLend,
        Func<TResult> onBillMedicareMedicaid,
        Func<TResult> onHealthcareSupplier,
        Func<TResult> onFederalContracting,
        Func<TResult> onCharitableSolicitation,
        Func<TResult> onConstruction,
        Func<TResult> onOperatePsilocybinHealingCenter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GeneralCommerce => onGeneralCommerce(),
            _ when this == SellPrescriptionDrugs => onSellPrescriptionDrugs(),
            _ when this == ManufactureDrugs => onManufactureDrugs(),
            _ when this == SellMedicalDevices => onSellMedicalDevices(),
            _ when this == HaulFreight => onHaulFreight(),
            _ when this == BrokerFreight => onBrokerFreight(),
            _ when this == SellAlcohol => onSellAlcohol(),
            _ when this == ProduceSpirits => onProduceSpirits(),
            _ when this == ProvideInvestmentAdvice => onProvideInvestmentAdvice(),
            _ when this == AcceptDeposits => onAcceptDeposits(),
            _ when this == Lend => onLend(),
            _ when this == BillMedicareMedicaid => onBillMedicareMedicaid(),
            _ when this == HealthcareSupplier => onHealthcareSupplier(),
            _ when this == FederalContracting => onFederalContracting(),
            _ when this == CharitableSolicitation => onCharitableSolicitation(),
            _ when this == Construction => onConstruction(),
            _ when this == OperatePsilocybinHealingCenter => onOperatePsilocybinHealingCenter(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneralCommerce,
        Action onSellPrescriptionDrugs,
        Action onManufactureDrugs,
        Action onSellMedicalDevices,
        Action onHaulFreight,
        Action onBrokerFreight,
        Action onSellAlcohol,
        Action onProduceSpirits,
        Action onProvideInvestmentAdvice,
        Action onAcceptDeposits,
        Action onLend,
        Action onBillMedicareMedicaid,
        Action onHealthcareSupplier,
        Action onFederalContracting,
        Action onCharitableSolicitation,
        Action onConstruction,
        Action onOperatePsilocybinHealingCenter,
        Action<string> otherwise)
    {
        if (this == GeneralCommerce) onGeneralCommerce();
        else if (this == SellPrescriptionDrugs) onSellPrescriptionDrugs();
        else if (this == ManufactureDrugs) onManufactureDrugs();
        else if (this == SellMedicalDevices) onSellMedicalDevices();
        else if (this == HaulFreight) onHaulFreight();
        else if (this == BrokerFreight) onBrokerFreight();
        else if (this == SellAlcohol) onSellAlcohol();
        else if (this == ProduceSpirits) onProduceSpirits();
        else if (this == ProvideInvestmentAdvice) onProvideInvestmentAdvice();
        else if (this == AcceptDeposits) onAcceptDeposits();
        else if (this == Lend) onLend();
        else if (this == BillMedicareMedicaid) onBillMedicareMedicaid();
        else if (this == HealthcareSupplier) onHealthcareSupplier();
        else if (this == FederalContracting) onFederalContracting();
        else if (this == CharitableSolicitation) onCharitableSolicitation();
        else if (this == Construction) onConstruction();
        else if (this == OperatePsilocybinHealingCenter) onOperatePsilocybinHealingCenter();
        else otherwise(Value);
    }
}
