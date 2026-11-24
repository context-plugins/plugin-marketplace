from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HiringByDepartment(str, Enum):
    BUSINESS_DEVELOPMENT = "Business Development"
    CONSULTING = "Consulting"
    CUSTOMER_SERVICE = "Customer Service"
    ENGINEERING_TECHNICAL = "Engineering & Technical"
    FINANCE = "Finance"
    GENERAL_MANAGEMENT = "General Management"
    HEALTH_CARE_MEDICAL = "Health Care & Medical"
    HUMAN_RESOURCES = "Human Resources"
    INFORMATION_TECHNOLOGY = "Information Technology"
    LEGAL = "Legal"
    MARKETING = "Marketing"
    OPERATIONS = "Operations"
    OTHER = "Other"
    PRODUCT = "Product"
    RESEARCH_ANALYTICS = "Research & Analytics"
    SALES = "Sales"

    __str__ = str.__str__


HiringByDepartmentOrStr: TypeAlias = Annotated[HiringByDepartment | str, open_enum_validator(HiringByDepartment)]
