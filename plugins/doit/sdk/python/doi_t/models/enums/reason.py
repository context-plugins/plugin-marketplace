from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Feedback reason; must belong to the given ``resolution``. ``ANOMALY_CONFIRMED`` accepts ``SECURITY_BREACH``,
    ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE``, ``ANOMALOUS_OTHER``; ``NOT_ANOMALY``
    accepts ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT``, ``NON_ANOMALOUS_OTHER``."""

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


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
