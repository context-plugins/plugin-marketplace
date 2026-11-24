from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CohortSource(str, Enum):
    """Output only. Source of the cohort."""

    COHORT_SOURCE_UNSPECIFIED = "COHORT_SOURCE_UNSPECIFIED"
    USER_PROVIDED = "USER_PROVIDED"
    AIRFLOW = "AIRFLOW"

    __str__ = str.__str__


CohortSourceOrStr: TypeAlias = Annotated[CohortSource | str, open_enum_validator(CohortSource)]
