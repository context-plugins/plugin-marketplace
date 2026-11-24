from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobFunction(str, Enum):
    """Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence."""

    DATA_ENGINEER_DATA_ANALYSTS = "Data Engineer / Data Analysts"
    EXECUTIVE_TEAM = "Executive Team"
    FINANCE_ACCOUNTING = "Finance / Accounting"
    FOUNDER = "Founder"
    LEGAL_PURCHASING = "Legal / Purchasing"
    MANAGEMENT = "Management"
    SALES_MARKETING = "Sales / Marketing"
    SOFTWARE_OPS_ENGINEER = "Software / Ops Engineer"

    __str__ = str.__str__


JobFunctionOrStr: TypeAlias = Annotated[JobFunction | str, open_enum_validator(JobFunction)]
