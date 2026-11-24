from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode_browser_use_public_api_v4_wallets_api import ModeBrowserUsePublicApiV4WalletsApiOrStr


class StripeLinkStatusResponse(SdkBaseModel):
    """The project's active Stripe Link connection, if any."""

    is_connected: bool = Field(alias="isConnected")
    connection_id: Optional[UUID] = Field(default=UNSET, alias="connectionId")
    link_email: Optional[str] = Field(default=UNSET, alias="linkEmail")
    mode: Optional[ModeBrowserUsePublicApiV4WalletsApiOrStr] = UNSET


class StripeLinkStatusResponseDict(TypedDict):
    is_connected: bool
    connection_id: NotRequired[UUID]
    link_email: NotRequired[str]
    mode: NotRequired[ModeBrowserUsePublicApiV4WalletsApiOrStr]
