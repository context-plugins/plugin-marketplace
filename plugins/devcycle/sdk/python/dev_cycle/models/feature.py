from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr
from .eval_reason import EvalReason, EvalReasonDict


class Feature(SdkBaseModel):
    id: str = Field(alias="_id")
    """unique database id"""

    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id."""

    type_: Type1OrStr = Field(alias="type")
    """Feature type"""

    variation: str = Field(alias="_variation")
    """Bucketed feature variation ID"""

    variation_name: Optional[str] = Field(default=UNSET, alias="variationName")
    """Bucketed feature variation Name"""

    variation_key: Optional[str] = Field(default=UNSET, alias="variationKey")
    """Bucketed feature variation Key"""

    eval: Optional[EvalReason] = UNSET
    """The reason the User was Served this particular value"""


class FeatureDict(TypedDict):
    id: str
    key: str
    type_: Type1OrStr
    variation: str
    variation_name: NotRequired[str]
    variation_key: NotRequired[str]
    eval: NotRequired[EvalReasonDict]
