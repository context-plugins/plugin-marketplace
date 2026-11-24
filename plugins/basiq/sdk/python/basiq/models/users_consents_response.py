from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links1_connect_consents_api import Links1ConnectConsentsApi, Links1ConnectConsentsApiDict
from .user_consent_get_response import UserConsentGetResponse, UserConsentGetResponseDict


class UsersConsentsResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    size: Optional[int] = UNSET
    data: Optional[list[UserConsentGetResponse]] = UNSET
    links: Optional[Links1ConnectConsentsApi] = UNSET


class UsersConsentsResponseDict(TypedDict):
    type_: NotRequired[str]
    size: NotRequired[int]
    data: NotRequired[list[UserConsentGetResponseDict]]
    links: NotRequired[Links1ConnectConsentsApiDict]
