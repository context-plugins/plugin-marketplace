from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_hightouch_signups_api import StatusHightouchSignupsApiOrStr


class CreateSignupResponse(SdkBaseModel):
    """``subscribed`` means consent settled in this request. ``doi_pending_confirmation`` means a confirmation was sent
    and consent settles when the person answers, which may be days later."""

    status: StatusHightouchSignupsApiOrStr


class CreateSignupResponseDict(TypedDict):
    status: StatusHightouchSignupsApiOrStr
