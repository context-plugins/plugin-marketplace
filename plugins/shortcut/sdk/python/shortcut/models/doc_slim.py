from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DocSlim(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    """The public id of the Doc"""

    title: str | None
    """The Docs Title"""

    app_url: str
    """The Shortcut application url for the Doc."""


class DocSlimDict(TypedDict):
    id: UUID
    title: str | None
    app_url: str
