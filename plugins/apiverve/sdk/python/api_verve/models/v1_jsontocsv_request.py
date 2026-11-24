from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1JsontocsvRequest(SdkBaseModel):
    json_value: str = Field(alias="json")
    """The JSON array to convert to CSV (must be array of objects)"""

    delimiter: Optional[str] = UNSET
    """The delimiter to use in the CSV"""

    include_header: Optional[bool] = UNSET
    """Whether to include column headers in the output (default: true)"""


class V1JsontocsvRequestDict(TypedDict):
    json_value: str
    delimiter: NotRequired[str]
    include_header: NotRequired[bool]
