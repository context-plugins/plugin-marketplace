from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataFormat(str, Enum):
    """COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains labels and the second
    column contains documents. AUGMENTED_MANIFEST: The data format"""

    COMPREHEND_CSV = "COMPREHEND_CSV"
    AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST"

    __str__ = str.__str__


DataFormatOrStr: TypeAlias = Annotated[DataFormat | str, open_enum_validator(DataFormat)]
