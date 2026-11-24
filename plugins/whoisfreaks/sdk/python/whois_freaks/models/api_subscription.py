from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiSubscription(SdkBaseModel):
    request_limit: Optional[int] = Field(default=UNSET, alias="requestLimit")
    served_requests: Optional[int] = Field(default=UNSET, alias="servedRequests")
    subscription_status: Optional[str] = Field(default=UNSET, alias="subscriptionStatus")
    surcharge_request_limit: Optional[int] = Field(default=UNSET, alias="surchargeRequestLimit")
    served_surcharge_requests: Optional[int] = Field(default=UNSET, alias="servedSurchargeRequests")


class ApiSubscriptionDict(TypedDict):
    request_limit: NotRequired[int]
    served_requests: NotRequired[int]
    subscription_status: NotRequired[str]
    surcharge_request_limit: NotRequired[int]
    served_surcharge_requests: NotRequired[int]
