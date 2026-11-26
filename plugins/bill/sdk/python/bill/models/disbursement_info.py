from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ach_disbursement2 import AchDisbursement2, AchDisbursement2Dict
from .check_disbursement2 import CheckDisbursement2, CheckDisbursement2Dict
from .international_disbursement2 import InternationalDisbursement2, InternationalDisbursement2Dict
from .rpps_disbursement2 import RppsDisbursement2, RppsDisbursement2Dict
from .vcard_disbursement1 import VcardDisbursement1, VcardDisbursement1Dict
from .wallet_disbursement2 import WalletDisbursement2, WalletDisbursement2Dict


class DisbursementInfo(SdkBaseModel):
    """Disbursement info."""

    is_voidable: Optional[bool] = Field(default=UNSET, alias="isVoidable")
    """Set as ``true`` if the payment disbursement type can be voided"""

    check_disbursement: Optional[CheckDisbursement2] = Field(default=UNSET, alias="checkDisbursement")
    ach_disbursement: Optional[AchDisbursement2] = Field(default=UNSET, alias="achDisbursement")
    rpps_disbursement: Optional[RppsDisbursement2] = Field(default=UNSET, alias="rppsDisbursement")
    international_disbursement: Optional[InternationalDisbursement2] = Field(
        default=UNSET, alias="internationalDisbursement"
    )
    vcard_disbursement: Optional[VcardDisbursement1] = Field(default=UNSET, alias="vcardDisbursement")
    wallet_disbursement: Optional[WalletDisbursement2] = Field(default=UNSET, alias="walletDisbursement")


class DisbursementInfoDict(TypedDict):
    is_voidable: NotRequired[bool]
    check_disbursement: NotRequired[CheckDisbursement2Dict]
    ach_disbursement: NotRequired[AchDisbursement2Dict]
    rpps_disbursement: NotRequired[RppsDisbursement2Dict]
    international_disbursement: NotRequired[InternationalDisbursement2Dict]
    vcard_disbursement: NotRequired[VcardDisbursement1Dict]
    wallet_disbursement: NotRequired[WalletDisbursement2Dict]
