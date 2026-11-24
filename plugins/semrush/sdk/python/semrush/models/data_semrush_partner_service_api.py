from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .viewer_active_product import ViewerActiveProduct, ViewerActiveProductDict


class DataSemrushPartnerServiceApi(SdkBaseModel):
    """An object describes user status, related to the app"""

    is_main_product_active: Optional[bool] = UNSET
    """Shows if the app's main product is active"""

    is_app_taken_for_free: Optional[bool] = UNSET
    """Shows if the app is taken for free"""

    is_main_product_trial_available: Optional[bool] = UNSET
    """true if a user can activate trial for app's main product"""

    product_trials_available: Optional[list[UUID]] = UNSET
    """All app's products ids, for which user can activate trial"""

    active_products: Optional[list[ViewerActiveProduct]] = UNSET
    """List of user's in-app purchases (bought products)"""

    extra_user_data: OptionalNullable[Any] = UNSET
    """Reserved for future use"""


class DataSemrushPartnerServiceApiDict(TypedDict):
    is_main_product_active: NotRequired[bool]
    is_app_taken_for_free: NotRequired[bool]
    is_main_product_trial_available: NotRequired[bool]
    product_trials_available: NotRequired[list[UUID]]
    active_products: NotRequired[list[ViewerActiveProductDict]]
    extra_user_data: NotRequired[Any | None]
