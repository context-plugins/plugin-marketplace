from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1MiscLinkedinPostReshareResponse(SdkBaseModel):
    success: bool
    id: str
    activity: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET


class ApiV1MiscLinkedinPostReshareResponseDict(TypedDict):
    success: bool
    id: str
    activity: NotRequired[str | None]
    permalink: NotRequired[str | None]
