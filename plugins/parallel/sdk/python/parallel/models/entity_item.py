from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntityItem(SdkBaseModel):
    name: str
    """Entity name."""

    url: str
    """Canonical URL for the entity."""

    description: str
    """Descriptive text about the entity."""


class EntityItemDict(TypedDict):
    name: str
    url: str
    description: str
