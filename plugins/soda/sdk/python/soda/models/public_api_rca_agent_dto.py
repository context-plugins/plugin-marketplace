from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiRcaAgentDto(SdkBaseModel):
    model: Optional[str] = UNSET
    name: str
    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    version: Optional[str] = UNSET


class PublicApiRcaAgentDtoDict(TypedDict):
    model: NotRequired[str]
    name: str
    session_id: NotRequired[str]
    version: NotRequired[str]
