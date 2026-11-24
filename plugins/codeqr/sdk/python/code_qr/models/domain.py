from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Domain(SdkBaseModel):
    slug: str
    """The domain of the project."""


class DomainDict(TypedDict):
    slug: str
