from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api import Api, ApiDict


class ListApisResponse(SdkBaseModel):
    apis: Optional[list[Api]] = UNSET
    """The Api objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListApisResponseDict(TypedDict):
    apis: NotRequired[list[ApiDict]]
    next_token: NotRequired[str]
