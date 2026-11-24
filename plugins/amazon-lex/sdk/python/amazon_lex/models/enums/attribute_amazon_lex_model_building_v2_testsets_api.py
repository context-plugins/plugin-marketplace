from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributeAmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """Specifies whether to sort the test sets by name or by the time they were last updated."""

    TEST_SET_NAME = "TestSetName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

    __str__ = str.__str__


AttributeAmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    AttributeAmazonLexModelBuildingV2TestsetsApi | str,
    open_enum_validator(AttributeAmazonLexModelBuildingV2TestsetsApi),
]
