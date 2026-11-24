from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_flightdeck_dope_security_public_api_specification_with_categories import (
    DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories,
    DataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesDict,
)


class PolicyContentRestrictionsRequest(SdkBaseModel):
    """Request body for updating restrictions on dope and custom categories"""

    data: DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories


class PolicyContentRestrictionsRequestDict(TypedDict):
    data: DataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesDict
