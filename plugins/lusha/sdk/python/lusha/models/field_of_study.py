from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class FieldOfStudy(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET


class FieldOfStudyDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
