from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4AmazonComprehendOperationsApi(str, Enum):
    """The type of the entity. Amazon Comprehend supports a variety of entity types."""

    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    FACILITY = "FACILITY"
    BRAND = "BRAND"
    COMMERCIAL_ITEM = "COMMERCIAL_ITEM"
    MOVIE = "MOVIE"
    MUSIC = "MUSIC"
    BOOK = "BOOK"
    SOFTWARE = "SOFTWARE"
    GAME = "GAME"
    PERSONAL_TITLE = "PERSONAL_TITLE"
    EVENT = "EVENT"
    DATE = "DATE"
    QUANTITY = "QUANTITY"
    ATTRIBUTE = "ATTRIBUTE"
    OTHER = "OTHER"

    __str__ = str.__str__


Type4AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    Type4AmazonComprehendOperationsApi | str, open_enum_validator(Type4AmazonComprehendOperationsApi)
]
