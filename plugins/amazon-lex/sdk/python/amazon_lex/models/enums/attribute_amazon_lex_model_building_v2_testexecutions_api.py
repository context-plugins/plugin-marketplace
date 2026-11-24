from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributeAmazonLexModelBuildingV2TestexecutionsApi(str, Enum):
    """Specifies whether to sort the test set executions by the date and time at which the test sets were created."""

    TEST_SET_NAME = "TestSetName"
    CREATION_DATE_TIME = "CreationDateTime"

    __str__ = str.__str__


AttributeAmazonLexModelBuildingV2TestexecutionsApiOrStr: TypeAlias = Annotated[
    AttributeAmazonLexModelBuildingV2TestexecutionsApi | str,
    open_enum_validator(AttributeAmazonLexModelBuildingV2TestexecutionsApi),
]
