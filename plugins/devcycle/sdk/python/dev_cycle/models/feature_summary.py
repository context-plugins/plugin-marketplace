from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .link import Link, LinkDict


class FeatureSummary(SdkBaseModel):
    maintainers: list[str]
    """Auth0 maintainers of this feature"""

    links: list[Link]
    markdown: str


class FeatureSummaryDict(TypedDict):
    maintainers: list[str]
    links: list[LinkDict]
    markdown: str
