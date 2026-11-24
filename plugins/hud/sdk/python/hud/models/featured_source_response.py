from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeaturedSourceResponse(SdkBaseModel):
    """Where a featured environment's source lives in the public SDK repository."""

    repository_url: str
    path: str
    """Directory of the environment within the repository"""

    url: str
    """Browsable URL of that directory on the default branch"""


class FeaturedSourceResponseDict(TypedDict):
    repository_url: str
    path: str
    url: str
