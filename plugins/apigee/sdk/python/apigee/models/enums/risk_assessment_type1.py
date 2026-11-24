from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskAssessmentType1(str, Enum):
    """Optional. The risk assessment type of the security monitoring condition. Defaults to ADVANCED_API_SECURITY."""

    RISK_ASSESSMENT_TYPE_UNSPECIFIED = "RISK_ASSESSMENT_TYPE_UNSPECIFIED"
    APIGEE = "APIGEE"
    API_HUB = "API_HUB"

    __str__ = str.__str__


RiskAssessmentType1OrStr: TypeAlias = Annotated[RiskAssessmentType1 | str, open_enum_validator(RiskAssessmentType1)]
