from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChargeAuthorizationRequestDto(SdkBaseModel):
    """Authorize your organization to charge the customer."""

    authorized_to_charge: bool = Field(alias="authorizedToCharge")
    """Set as ``true`` if your organization is authorized to charge the customer for invoices"""


class ChargeAuthorizationRequestDtoDict(TypedDict):
    authorized_to_charge: bool
