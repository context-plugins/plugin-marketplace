from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr


class MetricHeader(SdkBaseModel):
    """Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows
    and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a
    report; correspondingly, those metrics do not produce headers."""

    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="type")
    """The metric's data type."""

    name: Optional[str] = UNSET
    """The metric's name."""


class MetricHeaderDict(TypedDict):
    type_: NotRequired[Type2OrStr]
    name: NotRequired[str]
