from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget39(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB = "Comprehend_20171127.DescribeDocumentClassificationJob"

    __str__ = str.__str__


XAmzTarget39OrStr: TypeAlias = Annotated[XAmzTarget39 | str, open_enum_validator(XAmzTarget39)]
