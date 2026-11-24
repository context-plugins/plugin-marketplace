from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget41(str, Enum):
    COMPREHEND_20171127_START_DOCUMENT_CLASSIFICATION_JOB = "Comprehend_20171127.StartDocumentClassificationJob"

    __str__ = str.__str__


XAmzTarget41OrStr: TypeAlias = Annotated[XAmzTarget41 | str, open_enum_validator(XAmzTarget41)]
