from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse(SdkBaseModel):
    categories: Optional[list[Any]] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponseDict(TypedDict):
    categories: NotRequired[list[Any]]
    next_page_token: NotRequired[str]
