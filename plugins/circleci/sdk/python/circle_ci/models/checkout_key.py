from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_circleci_project_api import TypeCircleciProjectApiOrStr


class CheckoutKey(SdkBaseModel):
    public_key: Optional[str] = Field(default=UNSET, alias="public-key")
    """The public SSH key"""

    type_: Optional[TypeCircleciProjectApiOrStr] = Field(default=UNSET, alias="type")
    """The type of checkout key"""

    fingerprint: Optional[str] = UNSET
    """The MD5 fingerprint of the key"""

    preferred: Optional[bool] = UNSET
    """Whether this is the preferred checkout key"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="created-at")
    """When the key was created"""


class CheckoutKeyDict(TypedDict):
    public_key: NotRequired[str]
    type_: NotRequired[TypeCircleciProjectApiOrStr]
    fingerprint: NotRequired[str]
    preferred: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
