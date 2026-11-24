from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Threads2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    creation_id: OptionalNullable[str] = Field(default=UNSET, alias="creationId")
    """Media container id; lets a retry detect a container Meta already published."""


class Threads2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    creation_id: NotRequired[str | None]
