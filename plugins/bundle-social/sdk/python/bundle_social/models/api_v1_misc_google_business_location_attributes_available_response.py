from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lookup import Lookup, LookupDict


class ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse(SdkBaseModel):
    attributes: Optional[list[Any]] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    lookup: Optional[Lookup] = UNSET


class ApiV1MiscGoogleBusinessLocationAttributesAvailableResponseDict(TypedDict):
    attributes: NotRequired[list[Any]]
    next_page_token: NotRequired[str]
    lookup: NotRequired[LookupDict]
