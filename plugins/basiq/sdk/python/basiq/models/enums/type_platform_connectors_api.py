from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypePlatformConnectorsApi(str, Enum):
    """Institution type identifier Bank BankInstitutionType BankInstitutionType institution type identifier for Banks
    Bank (Foreign) BankForeignInstitutionType BankForeignInstitutionType institution type identifier for Foreign banks
    Test Bank TestBankInstitutionType TestBankInstitutionType institution type identifier for Test banks Credit Union
    CreditUnionInstitutionType CreditUnionInstitutionType institution type identifier for Credit union institutions
    Financial Services FinancialServicesInstitutionType FinancialServicesInstitutionType institution type identifier for
    Financial service institutions Superannuation SuperannuationInstitutionType SuperannuationInstitutionType
    institution type identifier for Superannuation institutions Building Society BuildingSociety BuildingSociety
    institution type identifier for Building Society institutions Government Government Government institution type
    identifier for Government institutions"""

    BANK = "Bank"
    BANK_FOREIGN = "Bank (Foreign)"
    TEST_BANK = "Test Bank"
    CREDIT_UNION = "Credit Union"
    FINANCIAL_SERVICES = "Financial Services"
    SUPERANNUATION = "Superannuation"
    BUILDING_SOCIETY = "Building Society"
    GOVERNMENT = "Government"

    __str__ = str.__str__


TypePlatformConnectorsApiOrStr: TypeAlias = Annotated[
    TypePlatformConnectorsApi | str, open_enum_validator(TypePlatformConnectorsApi)
]
