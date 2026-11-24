from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.activity import ActivityOrStr
from .enums.form_type import FormTypeOrStr
from .enums.stated_role import StatedRoleOrStr


class Context(SdkBaseModel):
    form_type: Optional[FormTypeOrStr] = UNSET
    message: Optional[str] = UNSET
    stated_value: Optional[float] = UNSET
    """USD"""

    stated_role: Optional[StatedRoleOrStr] = UNSET
    country: Optional[str] = UNSET
    activity: Optional[ActivityOrStr] = UNSET
    claimed_website: Optional[str] = UNSET
    """vendor_claim / listing_claim: the website of the business or listing being claimed. Enables the affiliation
    check."""

    stated_location: Optional[str] = UNSET
    """The place or market the sender stated ("Jakarta"): shown on read.sender, never stored"""


class ContextDict(TypedDict):
    form_type: NotRequired[FormTypeOrStr]
    message: NotRequired[str]
    stated_value: NotRequired[float]
    stated_role: NotRequired[StatedRoleOrStr]
    country: NotRequired[str]
    activity: NotRequired[ActivityOrStr]
    claimed_website: NotRequired[str]
    stated_location: NotRequired[str]
