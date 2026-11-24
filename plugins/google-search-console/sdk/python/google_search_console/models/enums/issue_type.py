from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IssueType(str, Enum):
    """Mobile-usability issue type."""

    MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED"
    USES_INCOMPATIBLE_PLUGINS = "USES_INCOMPATIBLE_PLUGINS"
    CONFIGURE_VIEWPORT = "CONFIGURE_VIEWPORT"
    FIXED_WIDTH_VIEWPORT = "FIXED_WIDTH_VIEWPORT"
    SIZE_CONTENT_TO_VIEWPORT = "SIZE_CONTENT_TO_VIEWPORT"
    USE_LEGIBLE_FONT_SIZES = "USE_LEGIBLE_FONT_SIZES"
    TAP_TARGETS_TOO_CLOSE = "TAP_TARGETS_TOO_CLOSE"

    __str__ = str.__str__


IssueTypeOrStr: TypeAlias = Annotated[IssueType | str, open_enum_validator(IssueType)]
