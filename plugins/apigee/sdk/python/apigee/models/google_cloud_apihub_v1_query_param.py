from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type import DataTypeOrStr


class GoogleCloudApihubV1QueryParam(SdkBaseModel):
    """An aggregation of HTTP query parameter occurrences."""

    name: Optional[str] = UNSET
    """Required. Name of query param"""

    data_type: Optional[DataTypeOrStr] = Field(default=UNSET, alias="dataType")
    """Optional. Data type of path param"""

    count: Optional[str] = UNSET
    """Optional. The number of occurrences of this query parameter across transactions."""


class GoogleCloudApihubV1QueryParamDict(TypedDict):
    name: NotRequired[str]
    data_type: NotRequired[DataTypeOrStr]
    count: NotRequired[str]
