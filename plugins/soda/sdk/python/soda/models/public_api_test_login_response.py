from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiTestLoginResponse(SdkBaseModel):
    organisation_name: Optional[str] = Field(default=UNSET, alias="organisationName")


class PublicApiTestLoginResponseDict(TypedDict):
    organisation_name: NotRequired[str]
