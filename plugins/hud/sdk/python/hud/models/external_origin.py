from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExternalOrigin(SdkBaseModel):
    """Where an imported entity comes from: a system and the entity's id in it."""

    system: Literal["harbor"] = "harbor"
    """A system HUD imports environments and runs from."""

    external_id: str


class ExternalOriginDict(TypedDict):
    system: Literal["harbor"]
    external_id: str
