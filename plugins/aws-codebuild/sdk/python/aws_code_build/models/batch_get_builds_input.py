from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetBuildsInput(SdkBaseModel):
    ids: list[str]
    """The IDs of the builds."""


class BatchGetBuildsInputDict(TypedDict):
    ids: list[str]
