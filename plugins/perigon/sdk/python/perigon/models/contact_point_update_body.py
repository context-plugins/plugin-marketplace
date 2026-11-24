from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.status1 import Status1OrStr


class ContactPointUpdateBody(SdkBaseModel):
    name: OptionalNullable[str] = UNSET
    status: OptionalNullable[Status1OrStr] = UNSET
    webhook: OptionalNullable[str] = UNSET


class ContactPointUpdateBodyDict(TypedDict):
    name: NotRequired[str | None]
    status: NotRequired[Status1OrStr | None]
    webhook: NotRequired[str | None]
