from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Bluesky2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    uri: OptionalNullable[str] = UNSET
    cid: OptionalNullable[str] = UNSET
    """Content ID of the created record"""

    permalink: OptionalNullable[str] = UNSET
    did: OptionalNullable[str] = UNSET
    """Author DID (owner of the record)"""


class Bluesky2Dict(TypedDict):
    id: NotRequired[str | None]
    uri: NotRequired[str | None]
    cid: NotRequired[str | None]
    permalink: NotRequired[str | None]
    did: NotRequired[str | None]
