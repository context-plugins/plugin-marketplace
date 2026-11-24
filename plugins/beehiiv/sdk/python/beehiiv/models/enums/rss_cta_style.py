from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssCtaStyle(str, Enum):
    """The style of the call to action."""

    CTA_BUTTON = "CTA button"
    CTA_LINK = "CTA link"
    TITLE_AS_LINK = "Title as link"
    THUMBNAIL_AS_LINK = "Thumbnail as link"
    TITLE_AND_THUMBNAIL_AS_LINK = "Title and thumbnail as link"

    __str__ = str.__str__


RssCtaStyleOrStr: TypeAlias = Annotated[RssCtaStyle | str, open_enum_validator(RssCtaStyle)]
