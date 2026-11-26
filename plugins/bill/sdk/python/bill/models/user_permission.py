from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserPermission(SdkBaseModel):
    """User level permission response DTO."""

    pay_online: Optional[bool] = Field(default=UNSET, alias="payOnline")
    """This field is set as ``true`` if you can make online payments"""


class UserPermissionDict(TypedDict):
    pay_online: NotRequired[bool]
