from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .car_details import CarDetails, CarDetailsDict
from .travel_details import TravelDetails, TravelDetailsDict


class PolicyDetails(SdkBaseModel):
    """Information about insurance"""

    insurance_type: str
    """Insurance policy type"""

    insurance_start_dt: str
    """ISO 8601 start date, e.g. 2018-10-17"""

    insurance_end_dt: str
    """ISO 8601 end date, e.g. 2018-10-17"""

    insured_amount: str
    """Amount of insurance policy"""

    car_details: Optional[CarDetails] = UNSET
    """Required for car insurance"""

    travel_details: Optional[TravelDetails] = UNSET
    """Required for travel insurance"""

    refundable: Optional[bool] = UNSET
    """If insurance can be cancelled/refunded - true, otherwise - false"""

    provider_name: Optional[str] = UNSET


class PolicyDetailsDict(TypedDict):
    insurance_type: str
    insurance_start_dt: str
    insurance_end_dt: str
    insured_amount: str
    car_details: NotRequired[CarDetailsDict]
    travel_details: NotRequired[TravelDetailsDict]
    refundable: NotRequired[bool]
    provider_name: NotRequired[str]
