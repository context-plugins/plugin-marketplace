from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactSignalTypesResponse(SdkBaseModel):
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")


class ContactSignalTypesResponseDict(TypedDict):
    signal_types: NotRequired[list[str]]
