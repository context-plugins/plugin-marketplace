from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeprecateDomainInput(SdkBaseModel):
    name: str
    """The name of the domain to deprecate."""


class DeprecateDomainInputDict(TypedDict):
    name: str
