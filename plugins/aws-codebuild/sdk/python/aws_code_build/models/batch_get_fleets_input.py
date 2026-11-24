from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetFleetsInput(SdkBaseModel):
    names: list[str]
    """The names or ARNs of the compute fleets."""


class BatchGetFleetsInputDict(TypedDict):
    names: list[str]
