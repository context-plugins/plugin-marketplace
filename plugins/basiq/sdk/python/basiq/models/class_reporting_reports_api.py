from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClassReportingReportsApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of the account class"""

    product: Optional[str] = UNSET
    """Product of the account class"""


class ClassReportingReportsApiDict(TypedDict):
    type_: NotRequired[str]
    product: NotRequired[str]
