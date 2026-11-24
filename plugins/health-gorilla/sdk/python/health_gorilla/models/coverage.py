from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Coverage(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    beneficiary: Optional[Any] = UNSET
    payor: Optional[list[Any]] = UNSET
    subscriber_id: Optional[str] = Field(default=UNSET, alias="subscriberId")


class CoverageDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    status: NotRequired[str]
    beneficiary: NotRequired[Any]
    payor: NotRequired[list[Any]]
    subscriber_id: NotRequired[str]
