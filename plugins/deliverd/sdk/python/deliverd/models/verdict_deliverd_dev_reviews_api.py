from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.verdict1_deliverd_dev_reviews_api import Verdict1DeliverdDevReviewsApiOrStr


class VerdictDeliverdDevReviewsApi(SdkBaseModel):
    verdict: Verdict1DeliverdDevReviewsApiOrStr
    by: str
    note: str | None
    at: str


class VerdictDeliverdDevReviewsApiDict(TypedDict):
    verdict: Verdict1DeliverdDevReviewsApiOrStr
    by: str
    note: str | None
    at: str
