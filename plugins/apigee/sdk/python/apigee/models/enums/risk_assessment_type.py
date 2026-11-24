from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskAssessmentType(str, Enum):
    """Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY."""

    RISK_ASSESSMENT_TYPE_UNSPECIFIED = "RISK_ASSESSMENT_TYPE_UNSPECIFIED"
    APIGEE = "APIGEE"
    API_HUB = "API_HUB"

    __str__ = str.__str__


RiskAssessmentTypeOrStr: TypeAlias = Annotated[RiskAssessmentType | str, open_enum_validator(RiskAssessmentType)]
