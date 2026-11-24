from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteCollectionResponse(SdkBaseModel):
    status_code: Optional[int] = Field(default=UNSET, alias="StatusCode")
    """HTTP status code that indicates the result of the operation."""


class DeleteCollectionResponseDict(TypedDict):
    status_code: NotRequired[int]
