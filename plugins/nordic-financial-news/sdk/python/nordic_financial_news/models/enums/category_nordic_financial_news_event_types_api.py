from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CategoryNordicFinancialNewsEventTypesApi(str, Enum):
    """The broader category this type belongs to"""

    EARNINGS = "earnings"
    MA = "ma"
    EXECUTIVE_CHANGES = "executive_changes"
    REGULATORY = "regulatory"
    DIVIDENDS = "dividends"
    EQUITY_ACTIONS = "equity_actions"
    LEGAL = "legal"
    CREDIT = "credit"
    BANKRUPTCY = "bankruptcy"
    PARTNERSHIPS = "partnerships"
    PRODUCTS = "products"
    RESTRUCTURING = "restructuring"
    MACRO = "macro"
    FUNDING = "funding"
    ESG = "esg"
    OPERATIONS = "operations"
    ANALYST_RATINGS = "analyst_ratings"
    SHAREHOLDER_ACTIVITY = "shareholder_activity"
    OTHER = "other"
    COMMENTARY = "commentary"

    __str__ = str.__str__


CategoryNordicFinancialNewsEventTypesApiOrStr: TypeAlias = Annotated[
    CategoryNordicFinancialNewsEventTypesApi | str, open_enum_validator(CategoryNordicFinancialNewsEventTypesApi)
]
