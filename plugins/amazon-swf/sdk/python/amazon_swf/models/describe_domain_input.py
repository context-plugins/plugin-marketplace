from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDomainInput(SdkBaseModel):
    name: str
    """The name of the domain to describe."""


class DescribeDomainInputDict(TypedDict):
    name: str
