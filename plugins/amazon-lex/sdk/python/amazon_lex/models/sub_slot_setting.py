from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .specifications import Specifications, SpecificationsDict


class SubSlotSetting(SdkBaseModel):
    expression: Optional[str] = UNSET
    """The expression text for defining the constituent sub slots in the composite slot using logical AND and OR
    operators."""

    slot_specifications: Optional[dict[str, Specifications]] = Field(default=UNSET, alias="slotSpecifications")
    """Specifications for the constituent sub slots of a composite slot."""


class SubSlotSettingDict(TypedDict):
    expression: NotRequired[str]
    slot_specifications: NotRequired[dict[str, SpecificationsDict]]
