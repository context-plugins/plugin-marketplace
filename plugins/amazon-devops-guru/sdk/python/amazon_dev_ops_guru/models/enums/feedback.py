from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feedback(str, Enum):
    """The feedback provided by the customer."""

    VALID_COLLECTION = "VALID_COLLECTION"
    RECOMMENDATION_USEFUL = "RECOMMENDATION_USEFUL"
    ALERT_TOO_SENSITIVE = "ALERT_TOO_SENSITIVE"
    DATA_NOISY_ANOMALY = "DATA_NOISY_ANOMALY"
    DATA_INCORRECT = "DATA_INCORRECT"

    __str__ = str.__str__


FeedbackOrStr: TypeAlias = Annotated[Feedback | str, open_enum_validator(Feedback)]
