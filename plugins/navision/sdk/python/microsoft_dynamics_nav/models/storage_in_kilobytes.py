from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StorageInKilobytes(SdkBaseModel):
    default: Optional[int] = UNSET
    """Default storage allowance"""

    user_licenses: Optional[int] = Field(default=UNSET, alias="userLicenses")
    """Storage based on user licenses"""

    additional_capacity: Optional[int] = Field(default=UNSET, alias="additionalCapacity")
    """Storage from purchased add-ons"""

    total: Optional[int] = UNSET
    """Total allowed storage"""


class StorageInKilobytesDict(TypedDict):
    default: NotRequired[int]
    user_licenses: NotRequired[int]
    additional_capacity: NotRequired[int]
    total: NotRequired[int]
