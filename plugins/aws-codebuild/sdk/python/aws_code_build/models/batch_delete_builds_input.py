from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchDeleteBuildsInput(SdkBaseModel):
    ids: list[str]
    """The IDs of the builds to delete."""


class BatchDeleteBuildsInputDict(TypedDict):
    ids: list[str]
