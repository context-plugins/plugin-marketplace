from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskAssessmentType2(str, Enum):
    RISK_ASSESSMENT_TYPE_UNSPECIFIED = "RISK_ASSESSMENT_TYPE_UNSPECIFIED"
    APIGEE = "APIGEE"
    API_HUB = "API_HUB"

    __str__ = str.__str__


RiskAssessmentType2OrStr: TypeAlias = Annotated[RiskAssessmentType2 | str, open_enum_validator(RiskAssessmentType2)]
