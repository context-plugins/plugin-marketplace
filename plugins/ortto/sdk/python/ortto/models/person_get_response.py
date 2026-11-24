from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonGetResponse(SdkBaseModel):
    contacts: Optional[list[Any]] = UNSET
    offset: Optional[int] = UNSET
    has_more: Optional[bool] = UNSET


class PersonGetResponseDict(TypedDict):
    contacts: NotRequired[list[Any]]
    offset: NotRequired[int]
    has_more: NotRequired[bool]
