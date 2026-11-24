from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.update_plan_request_status import UpdatePlanRequestStatusOrStr
from .plan_attribute_input import PlanAttributeInput, PlanAttributeInputDict


class UpdatePlanRequest(SdkBaseModel):
    name: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    supported_currencies: Optional[list[str]] = Field(default=UNSET, alias="supportedCurrencies")
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    status: Optional[UpdatePlanRequestStatusOrStr] = UNSET
    """Set to ``archived`` to archive this plan, or ``active`` to restore it."""

    attributes: Optional[list[PlanAttributeInput]] = UNSET


class UpdatePlanRequestDict(TypedDict):
    name: NotRequired[str | None]
    external_id: NotRequired[str | None]
    supported_currencies: NotRequired[list[str]]
    is_default: NotRequired[bool]
    status: NotRequired[UpdatePlanRequestStatusOrStr]
    attributes: NotRequired[list[PlanAttributeInputDict]]
