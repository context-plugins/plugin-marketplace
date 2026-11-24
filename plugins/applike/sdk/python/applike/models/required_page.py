from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RequiredPage(SdkBaseModel):
    offset: int
    """The number of resources to skip for this filter"""

    limit: int
    """The maximum number of resources in a page. If set to 0, we default to a limit of 100."""


class RequiredPageDict(TypedDict):
    offset: int
    limit: int
