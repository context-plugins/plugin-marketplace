from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.subtype1 import Subtype1OrStr
from .lookalike_spec import LookalikeSpec, LookalikeSpecDict


class CustomAudienceCreate(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    subtype: Subtype1OrStr
    customer_file_source: Optional[str] = UNSET
    """Source of customer data for CUSTOM subtype"""

    lookalike_spec: Optional[LookalikeSpec] = UNSET
    """Specification for lookalike audiences"""

    rule: Optional[Any] = UNSET
    """Rule-based audience definition for WEBSITE or APP subtypes"""


class CustomAudienceCreateDict(TypedDict):
    name: str
    description: NotRequired[str]
    subtype: Subtype1OrStr
    customer_file_source: NotRequired[str]
    lookalike_spec: NotRequired[LookalikeSpecDict]
    rule: NotRequired[Any]
