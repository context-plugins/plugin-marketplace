from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_didlogic_com_purchases_api import (
    PaginationDidlogicComPurchasesApi,
    PaginationDidlogicComPurchasesApiDict,
)
from .sm import Sm, SmDict


class ApiV1SmsResponse(SdkBaseModel):
    pagination: PaginationDidlogicComPurchasesApi
    sms: list[Sm]
    """List of SMS messages"""


class ApiV1SmsResponseDict(TypedDict):
    pagination: PaginationDidlogicComPurchasesApiDict
    sms: list[SmDict]
