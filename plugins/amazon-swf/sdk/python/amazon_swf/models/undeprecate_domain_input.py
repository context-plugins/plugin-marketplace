from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UndeprecateDomainInput(SdkBaseModel):
    name: str
    """The name of the domain of the deprecated workflow type."""


class UndeprecateDomainInputDict(TypedDict):
    name: str
