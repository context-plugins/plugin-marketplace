from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intl_pmts_configuration_response_dto import IntlPmtsConfigurationResponseDto, IntlPmtsConfigurationResponseDtoDict


class VendorConfigurationResponseDto(SdkBaseModel):
    """Vendor configuration response."""

    international_payments: Optional[IntlPmtsConfigurationResponseDto] = Field(
        default=UNSET, alias="internationalPayments"
    )
    """International payments configuration response."""


class VendorConfigurationResponseDtoDict(TypedDict):
    international_payments: NotRequired[IntlPmtsConfigurationResponseDtoDict]
