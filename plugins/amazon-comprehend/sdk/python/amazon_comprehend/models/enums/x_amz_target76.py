from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget76(str, Enum):
    COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIER_SUMMARIES = "Comprehend_20171127.ListDocumentClassifierSummaries"

    __str__ = str.__str__


XAmzTarget76OrStr: TypeAlias = Annotated[XAmzTarget76 | str, open_enum_validator(XAmzTarget76)]
