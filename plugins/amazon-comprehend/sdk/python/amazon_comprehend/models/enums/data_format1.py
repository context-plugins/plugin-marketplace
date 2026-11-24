from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataFormat1(str, Enum):
    """The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are provided in the first
    column, and documents are provided in the second. If you use this value, you must provide the S3Uri parameter in
    your request. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is
    in JSON lines format. Each line is a complete JSON object that contains a training document and its associated
    labels. If you use this value, you must provide the AugmentedManifests parameter in your request. If you don't
    specify a value, Amazon Comprehend us"""

    COMPREHEND_CSV = "COMPREHEND_CSV"
    AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST"

    __str__ = str.__str__


DataFormat1OrStr: TypeAlias = Annotated[DataFormat1 | str, open_enum_validator(DataFormat1)]
