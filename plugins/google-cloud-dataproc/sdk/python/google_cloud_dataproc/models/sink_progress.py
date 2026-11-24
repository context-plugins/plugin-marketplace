from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SinkProgress(SdkBaseModel):
    num_output_rows: Optional[str] = Field(default=UNSET, alias="numOutputRows")
    description: Optional[str] = UNSET
    metrics: Optional[dict[str, str]] = UNSET


class SinkProgressDict(TypedDict):
    num_output_rows: NotRequired[str]
    description: NotRequired[str]
    metrics: NotRequired[dict[str, str]]
