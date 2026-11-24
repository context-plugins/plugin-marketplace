from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class UpdateFeatureSummaryDto(SdkBaseModel):
    maintainers: Optional[list[str]] = UNSET
    """Auth0 maintainers of the feature"""

    links: Optional[list[Link]] = UNSET
    """Array of links associated with the feature"""

    markdown: Optional[str] = UNSET


class UpdateFeatureSummaryDtoDict(TypedDict):
    maintainers: NotRequired[list[str]]
    links: NotRequired[list[LinkDict]]
    markdown: NotRequired[str]
