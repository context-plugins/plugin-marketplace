from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiTestDataStandardResponse(SdkBaseModel):
    scan_id: Optional[str] = Field(default=UNSET, alias="scanId")


class PublicApiTestDataStandardResponseDict(TypedDict):
    scan_id: NotRequired[str]
