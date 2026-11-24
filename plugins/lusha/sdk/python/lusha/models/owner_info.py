from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OwnerInfo(SdkBaseModel):
    """Resolved owner of the table. ``id`` is always present; ``email`` and ``name`` are resolved best-effort within the
    API key's account and may be omitted if resolution fails (in which case the object contains only ``id``). Replaces
    the removed top-level ``ownerId`` field - this is a breaking change from the prior response shape."""

    id: Optional[int] = UNSET
    email: Optional[EmailStr] = UNSET
    name: Optional[str] = UNSET


class OwnerInfoDict(TypedDict):
    id: NotRequired[int]
    email: NotRequired[EmailStr]
    name: NotRequired[str]
