from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.organization_card_account_user_status import OrganizationCardAccountUserStatusOrStr


class OrganizationCardAccountUserResponseDto(SdkBaseModel):
    """Card account user response."""

    card_account_id: Optional[str] = Field(default=UNSET, alias="cardAccountId")
    """BILL-generated ID of the card account. The value begins with ``cat``."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user. The value begins with ``006``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the card account is archived"""

    verification_status: Optional[OrganizationCardAccountUserStatusOrStr] = Field(
        default=UNSET, alias="verificationStatus"
    )


class OrganizationCardAccountUserResponseDtoDict(TypedDict):
    card_account_id: NotRequired[str]
    user_id: NotRequired[str]
    archived: NotRequired[bool]
    verification_status: NotRequired[OrganizationCardAccountUserStatusOrStr]
