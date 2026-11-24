from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_doi_t_data_hub_api import TypeDoiTDataHubApiOrStr
from .unions.value import Value, ValueDict


class Dimension(SdkBaseModel):
    key: Optional[str] = UNSET
    """If the type is ``fixed``, the key must be a valid fixed value. See the `DataHub API Guide
    <https://developer.doit.com/docs/datahub-api>`__ for more information."""

    type_: Optional[TypeDoiTDataHubApiOrStr] = Field(default=UNSET, alias="type")
    """The dimension type."""

    value: Optional[Value] = UNSET


class DimensionDict(TypedDict):
    key: NotRequired[str]
    type_: NotRequired[TypeDoiTDataHubApiOrStr]
    value: NotRequired[ValueDict]
