from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfirmCustomerAgreementResponse(SdkBaseModel):
    status: Optional[str] = UNSET
    """The status of the customer agreement when the connection was created. This will be either signed or unsigned."""


class ConfirmCustomerAgreementResponseDict(TypedDict):
    status: NotRequired[str]
