from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget18(str, Enum):
    COMPREHEND_20171127_CREATE_DOCUMENT_CLASSIFIER = "Comprehend_20171127.CreateDocumentClassifier"

    __str__ = str.__str__


XAmzTarget18OrStr: TypeAlias = Annotated[XAmzTarget18 | str, open_enum_validator(XAmzTarget18)]
