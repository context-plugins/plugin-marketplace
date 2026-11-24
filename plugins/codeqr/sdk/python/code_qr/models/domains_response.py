from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DomainsResponse(SdkBaseModel):
    slug: str
    """The domain name."""


class DomainsResponseDict(TypedDict):
    slug: str
