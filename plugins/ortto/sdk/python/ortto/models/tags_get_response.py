from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagsGetResponse(SdkBaseModel):
    tags: Optional[list[str]] = UNSET


class TagsGetResponseDict(TypedDict):
    tags: NotRequired[list[str]]
