from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubmittedComposeProjectRef(SdkBaseModel):
    """Build-context location inside the selected environment source artifact."""

    compose_path: str


class SubmittedComposeProjectRefDict(TypedDict):
    compose_path: str
