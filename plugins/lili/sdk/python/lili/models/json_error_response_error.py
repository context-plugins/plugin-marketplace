from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_single_error import JsonSingleError, JsonSingleErrorDict


class JsonErrorResponseError(SdkBaseModel):
    """An object representing a server error"""

    http_status: Optional[int] = Field(default=UNSET, alias="httpStatus")
    """The http status of the error"""

    reason_phrase: Optional[str] = Field(default=UNSET, alias="reasonPhrase")
    """Human readable description of the error"""

    errors: Optional[list[JsonSingleError]] = UNSET
    """A list of all the errors that the server reported"""


class JsonErrorResponseErrorDict(TypedDict):
    http_status: NotRequired[int]
    reason_phrase: NotRequired[str]
    errors: NotRequired[list[JsonSingleErrorDict]]
