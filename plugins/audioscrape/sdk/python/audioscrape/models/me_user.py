from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MeUser(SdkBaseModel):
    email: str
    id: int
    member_since: OptionalNullable[str] = UNSET
    """ISO-8601 UTC timestamp of account creation."""

    name: OptionalNullable[str] = UNSET


class MeUserDict(TypedDict):
    email: str
    id: int
    member_since: NotRequired[str | None]
    name: NotRequired[str | None]
