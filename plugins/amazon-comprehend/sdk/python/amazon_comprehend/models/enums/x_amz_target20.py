from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFIER = "Comprehend_20171127.DescribeDocumentClassifier"

    __str__ = str.__str__


XAmzTarget20OrStr: TypeAlias = Annotated[XAmzTarget20 | str, open_enum_validator(XAmzTarget20)]
