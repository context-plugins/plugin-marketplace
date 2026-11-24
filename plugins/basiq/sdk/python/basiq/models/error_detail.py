from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .source_insights_api import SourceInsightsApi, SourceInsightsApiDict


class ErrorDetail(SdkBaseModel):
    type_: Literal["error"] = Field(default="error", alias="type")
    """Type of data object"""

    code: str
    """Error code identifier"""

    title: str
    """Human-readable error title"""

    detail: str
    """Detailed error message"""

    source: OptionalNullable[SourceInsightsApi] = UNSET
    """Source of the error (optional)"""


class ErrorDetailDict(TypedDict):
    type_: Literal["error"]
    code: str
    title: str
    detail: str
    source: NotRequired[SourceInsightsApiDict | None]
