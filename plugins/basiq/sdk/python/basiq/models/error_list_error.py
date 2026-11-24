from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_item import ErrorItem, ErrorItemDict


class ErrorListError(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    correlation_id: Optional[UUID] = Field(default=UNSET, alias="correlationId")
    data: Optional[list[ErrorItem]] = UNSET


class ErrorListErrorDict(TypedDict):
    type_: NotRequired[str]
    correlation_id: NotRequired[UUID]
    data: NotRequired[list[ErrorItemDict]]
