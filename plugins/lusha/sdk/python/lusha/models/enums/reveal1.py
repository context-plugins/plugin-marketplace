from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reveal1(str, Enum):
    EMPLOYEES_BY_DEPARTMENT = "employeesByDepartment"
    EMPLOYEES_BY_LOCATION = "employeesByLocation"
    EMPLOYEES_BY_SENIORITY = "employeesBySeniority"
    COMPETITORS = "competitors"
    INTENT = "intent"
    ESTIMATED_ANNUAL_IT_SPEND = "estimatedAnnualItSpend"
    MONTHLY_WEBSITE_TRAFFIC = "monthlyWebsiteTraffic"

    __str__ = str.__str__


Reveal1OrStr: TypeAlias = Annotated[Reveal1 | str, open_enum_validator(Reveal1)]
