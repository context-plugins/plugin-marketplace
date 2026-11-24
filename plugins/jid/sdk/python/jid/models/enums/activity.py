from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Activity(str, Enum):
    GENERAL_COMMERCE = "general_commerce"
    SELL_PRESCRIPTION_DRUGS = "sell_prescription_drugs"
    MANUFACTURE_DRUGS = "manufacture_drugs"
    SELL_MEDICAL_DEVICES = "sell_medical_devices"
    HAUL_FREIGHT = "haul_freight"
    BROKER_FREIGHT = "broker_freight"
    SELL_ALCOHOL = "sell_alcohol"
    PRODUCE_SPIRITS = "produce_spirits"
    PROVIDE_INVESTMENT_ADVICE = "provide_investment_advice"
    ACCEPT_DEPOSITS = "accept_deposits"
    LEND = "lend"
    BILL_MEDICARE_MEDICAID = "bill_medicare_medicaid"
    HEALTHCARE_SUPPLIER = "healthcare_supplier"
    FEDERAL_CONTRACTING = "federal_contracting"
    CHARITABLE_SOLICITATION = "charitable_solicitation"
    CONSTRUCTION = "construction"
    OPERATE_PSILOCYBIN_HEALING_CENTER = "operate_psilocybin_healing_center"

    __str__ = str.__str__


ActivityOrStr: TypeAlias = Annotated[Activity | str, open_enum_validator(Activity)]
