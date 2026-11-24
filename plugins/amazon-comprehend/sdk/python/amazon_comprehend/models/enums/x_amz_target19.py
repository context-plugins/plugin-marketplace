from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    COMPREHEND_20171127_DELETE_DOCUMENT_CLASSIFIER = "Comprehend_20171127.DeleteDocumentClassifier"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
