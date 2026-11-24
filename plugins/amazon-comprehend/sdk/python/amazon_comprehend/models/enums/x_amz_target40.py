from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget40(str, Enum):
    COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFICATION_JOBS = "Comprehend_20171127.ListDocumentClassificationJobs"

    __str__ = str.__str__


XAmzTarget40OrStr: TypeAlias = Annotated[XAmzTarget40 | str, open_enum_validator(XAmzTarget40)]
