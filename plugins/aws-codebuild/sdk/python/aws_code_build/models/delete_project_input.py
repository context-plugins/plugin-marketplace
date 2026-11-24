from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteProjectInput(SdkBaseModel):
    name: str
    """The name of the build project."""


class DeleteProjectInputDict(TypedDict):
    name: str
