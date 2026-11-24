from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind_deliverd_dev_reviews_api import KindDeliverdDevReviewsApiOrStr


class Reviewer(SdkBaseModel):
    kind: KindDeliverdDevReviewsApiOrStr
    id: UUID
    label: str


class ReviewerDict(TypedDict):
    kind: KindDeliverdDevReviewsApiOrStr
    id: UUID
    label: str
