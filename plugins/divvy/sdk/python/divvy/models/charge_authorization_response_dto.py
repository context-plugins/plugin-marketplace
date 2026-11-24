from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChargeAuthorizationResponseDto(SdkBaseModel):
    """The type Charge customer response dto."""

    authorized_to_charge: Optional[bool] = Field(default=UNSET, alias="authorizedToCharge")
    """Set as ``true`` if your organization is authorized to charge the customer for invoices"""


class ChargeAuthorizationResponseDtoDict(TypedDict):
    authorized_to_charge: NotRequired[bool]
