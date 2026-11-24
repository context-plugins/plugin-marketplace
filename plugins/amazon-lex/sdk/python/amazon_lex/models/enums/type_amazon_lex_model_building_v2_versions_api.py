from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonLexModelBuildingV2VersionsApi(str, Enum):
    """How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the
    client application."""

    RETURN_INTENT = "ReturnIntent"
    CODE_HOOK = "CodeHook"

    __str__ = str.__str__


TypeAmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    TypeAmazonLexModelBuildingV2VersionsApi | str, open_enum_validator(TypeAmazonLexModelBuildingV2VersionsApi)
]
