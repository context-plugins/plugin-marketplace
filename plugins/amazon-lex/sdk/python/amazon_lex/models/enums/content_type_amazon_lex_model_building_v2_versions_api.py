from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentTypeAmazonLexModelBuildingV2VersionsApi(str, Enum):
    """The content type of the message string."""

    PLAIN_TEXT = "PlainText"
    SSML = "SSML"
    CUSTOM_PAYLOAD = "CustomPayload"

    __str__ = str.__str__


ContentTypeAmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    ContentTypeAmazonLexModelBuildingV2VersionsApi | str,
    open_enum_validator(ContentTypeAmazonLexModelBuildingV2VersionsApi),
]
