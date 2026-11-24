from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobTitle2(str, Enum):
    """The job function of the user being invited."""

    DATA_ENGINEER_DATA_ANALYSTS = "Data Engineer / Data Analysts"
    EXECUTIVE_TEAM = "Executive Team"
    FINANCE_ACCOUNTING = "Finance / Accounting"
    FOUNDER = "Founder"
    LEGAL_PURCHASING = "Legal / Purchasing"
    MANAGEMENT = "Management"
    SALES_MARKETING = "Sales / Marketing"
    SOFTWARE_OPS_ENGINEER = "Software / Ops Engineer"

    __str__ = str.__str__


JobTitle2OrStr: TypeAlias = Annotated[JobTitle2 | str, open_enum_validator(JobTitle2)]
