from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason1(str, Enum):
    FAULTY_ANOMALY_DETECTION_MODEL = "FAULTY_ANOMALY_DETECTION_MODEL"
    INCORRECT_DATA = "INCORRECT_DATA"
    EXPECTED_COST_SPIKE = "EXPECTED_COST_SPIKE"
    LOW_IMPACT = "LOW_IMPACT"
    NON_ANOMALOUS_OTHER = "NON_ANOMALOUS_OTHER"
    SECURITY_BREACH = "SECURITY_BREACH"
    MISCONFIGURATION = "MISCONFIGURATION"
    UNINTENTIONAL_PROVISIONING = "UNINTENTIONAL_PROVISIONING"
    ANOMALOUS_OTHER = "ANOMALOUS_OTHER"

    __str__ = str.__str__


Reason1OrStr: TypeAlias = Annotated[Reason1 | str, open_enum_validator(Reason1)]
