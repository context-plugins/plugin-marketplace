from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feature(str, Enum):
    """Indicates the type of analytics feature that was skipped during the analysis of a call analytics job."""

    GENERATIVE_SUMMARIZATION = "GENERATIVE_SUMMARIZATION"

    __str__ = str.__str__


FeatureOrStr: TypeAlias = Annotated[Feature | str, open_enum_validator(Feature)]
