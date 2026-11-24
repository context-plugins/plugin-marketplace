from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetSandboxesInput(SdkBaseModel):
    ids: list[str]
    """A comma separated list of sandboxIds or sandboxArns."""


class BatchGetSandboxesInputDict(TypedDict):
    ids: list[str]
