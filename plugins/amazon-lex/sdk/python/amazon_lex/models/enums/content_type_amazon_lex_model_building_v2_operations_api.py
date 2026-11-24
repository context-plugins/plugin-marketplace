from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentTypeAmazonLexModelBuildingV2OperationsApi(str, Enum):
    """The content type of the response."""

    APPLICATION_VND_AMAZONAWS_CARD_GENERIC = "application/vnd.amazonaws.card.generic"

    __str__ = str.__str__


ContentTypeAmazonLexModelBuildingV2OperationsApiOrStr: TypeAlias = Annotated[
    ContentTypeAmazonLexModelBuildingV2OperationsApi | str,
    open_enum_validator(ContentTypeAmazonLexModelBuildingV2OperationsApi),
]
