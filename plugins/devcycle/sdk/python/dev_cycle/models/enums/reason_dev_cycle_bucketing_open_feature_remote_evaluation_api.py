from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi(str, Enum):
    """An OpenFeature reason for the evaluation"""

    STATIC = "STATIC"
    TARGETING_MATCH = "TARGETING_MATCH"
    SPLIT = "SPLIT"
    DISABLED = "DISABLED"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApiOrStr: TypeAlias = Annotated[
    ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi | str,
    open_enum_validator(ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi),
]
