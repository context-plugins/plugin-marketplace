from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class ReportData(SdkBaseModel):
    """A key-value element that will be displayed along with the report."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """The type of data contained in the value field. If not provided, then the value will be detected as a boolean,
    number or string."""

    title: Optional[str] = UNSET
    """A string describing what this data field represents."""

    value: Optional[Any] = UNSET
    """The value of the data element."""


class ReportDataDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    title: NotRequired[str]
    value: NotRequired[Any]
