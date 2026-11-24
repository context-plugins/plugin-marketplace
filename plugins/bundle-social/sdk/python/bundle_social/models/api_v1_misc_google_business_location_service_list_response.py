from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscGoogleBusinessLocationServiceListResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    service_items: Optional[list[Any]] = Field(default=UNSET, alias="serviceItems")


class ApiV1MiscGoogleBusinessLocationServiceListResponseDict(TypedDict):
    name: NotRequired[str]
    service_items: NotRequired[list[Any]]
