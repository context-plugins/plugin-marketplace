from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonInput(SdkBaseModel):
    fields: Optional[Any] = UNSET
    """Map of field IDs to values for the person."""

    location: Optional[Any] = UNSET
    tags: Optional[list[str]] = UNSET
    unset_tags: Optional[list[str]] = UNSET


class PersonInputDict(TypedDict):
    fields: NotRequired[Any]
    location: NotRequired[Any]
    tags: NotRequired[list[str]]
    unset_tags: NotRequired[list[str]]
