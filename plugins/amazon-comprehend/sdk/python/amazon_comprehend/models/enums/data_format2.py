from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataFormat2(str, Enum):
    """The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training documents. The CSV
    file contains information about the custom entities that your trained model will detect. The required format of the
    file depends on whether you are providing annotations or an entity list. If you use this value, you must provide
    your CSV file by using either the Annotations or EntityList parameters. You must provide your training documents by
    using the Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground
    Truth. This file is in JSON lin"""

    COMPREHEND_CSV = "COMPREHEND_CSV"
    AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST"

    __str__ = str.__str__


DataFormat2OrStr: TypeAlias = Annotated[DataFormat2 | str, open_enum_validator(DataFormat2)]
