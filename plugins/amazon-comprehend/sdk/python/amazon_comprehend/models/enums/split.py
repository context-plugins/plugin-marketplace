from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Split(str, Enum):
    """The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you
    don't specify, the default is train. TRAIN - all of the documents in the manifest will be used for training. If no
    test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for
    testing. TEST - all of the documents in the manifest will be used for testing."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


SplitOrStr: TypeAlias = Annotated[Split | str, open_enum_validator(Split)]
