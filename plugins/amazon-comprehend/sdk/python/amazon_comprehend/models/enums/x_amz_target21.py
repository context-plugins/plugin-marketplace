from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIERS = "Comprehend_20171127.ListDocumentClassifiers"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
