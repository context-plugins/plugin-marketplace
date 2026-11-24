from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActiveContext(SdkBaseModel):
    name: str
    """The name of active context."""


class ActiveContextDict(TypedDict):
    name: str
