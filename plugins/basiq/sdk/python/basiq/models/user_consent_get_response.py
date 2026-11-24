from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data import Data, DataDict
from .links_connect_consents_api import LinksConnectConsentsApi, LinksConnectConsentsApiDict
from .purpose import Purpose, PurposeDict


class UserConsentGetResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: str = Field(alias="type")
    id: UUID
    created: RFC3339DateTime
    updated: RFC3339DateTime
    expiry_date: RFC3339DateTime = Field(alias="expiryDate")
    origin: Optional[str] = UNSET
    status: str
    """active, revoked, and expired"""

    purpose: Purpose
    data: Data
    revoked: Optional[str] = UNSET
    """To indicate when a user consent was revoked."""

    links: Optional[LinksConnectConsentsApi] = UNSET


class UserConsentGetResponseDict(TypedDict):
    type_: str
    id: UUID
    created: RFC3339DateTime
    updated: RFC3339DateTime
    expiry_date: RFC3339DateTime
    origin: NotRequired[str]
    status: str
    purpose: PurposeDict
    data: DataDict
    revoked: NotRequired[str]
    links: NotRequired[LinksConnectConsentsApiDict]
