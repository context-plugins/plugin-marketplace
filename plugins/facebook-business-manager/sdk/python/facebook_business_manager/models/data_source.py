from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataSource(SdkBaseModel):
    """The source of the audience data"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    sub_type: Optional[str] = UNSET


class DataSourceDict(TypedDict):
    type_: NotRequired[str]
    sub_type: NotRequired[str]
