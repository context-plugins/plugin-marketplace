from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization import Organization, OrganizationDict


class IamV1OrganizationsResponse(SdkBaseModel):
    organizations: Optional[list[Organization]] = UNSET
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Organizations row count"""


class IamV1OrganizationsResponseDict(TypedDict):
    organizations: NotRequired[list[OrganizationDict]]
    row_count: NotRequired[int]
