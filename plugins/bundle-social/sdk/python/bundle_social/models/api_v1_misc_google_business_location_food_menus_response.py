from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscGoogleBusinessLocationFoodMenusResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    menus: Optional[list[Any]] = UNSET


class ApiV1MiscGoogleBusinessLocationFoodMenusResponseDict(TypedDict):
    name: NotRequired[str]
    menus: NotRequired[list[Any]]
