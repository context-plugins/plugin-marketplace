from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget42(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"

    __str__ = str.__str__


XAmzTarget42OrStr: TypeAlias = Annotated[XAmzTarget42 | str, open_enum_validator(XAmzTarget42)]
