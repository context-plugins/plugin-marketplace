from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MetricConfig(SdkBaseModel):
    """Define how metrics are selected and filtered in reports."""

    type_: str = Field(alias="type")
    """Identifier for metric type (e.g., basic, custom, extended)."""

    value: str


class MetricConfigDict(TypedDict):
    type_: str
    value: str
