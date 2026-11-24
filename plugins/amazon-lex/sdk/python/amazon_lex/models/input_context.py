from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InputContext(SdkBaseModel):
    name: str
    """The name of the context."""


class InputContextDict(TypedDict):
    name: str
